// Entry for Figma Dev Mode Codegen
// Minimal scaffold: reads current selection and emits a React snippet

// Utilities
function getNodeName(node) {
  if (!node) return "Node";
  if (node.name && typeof node.name === "string" && node.name.trim().length > 0) {
    return node.name.trim();
  }
  return node.type || "Node";
}

function sanitizeComponentName(name) {
  return name
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

// Mapping registry: central place to align Figma names/pages to SDS components
// Extend this as your library grows. It is intentionally data-only.
const REGISTRY = {
  containers: ["Hero", "FormBox", "Menu", "Navigation", "Card"],
  nameMap: [
  // Buttons
  { figmaPage: "Buttons", figmaName: "Button", importFrom: "primitives", name: "Button" },
  { figmaPage: "Buttons", figmaName: "Icon Button", importFrom: "primitives", name: "IconButton" },
  { figmaPage: "Buttons", figmaName: "Button Group", importFrom: "primitives", name: "ButtonGroup" },
  { figmaPage: "Buttons", figmaName: "Button Danger", importFrom: "primitives", name: "Button" },

  // Inputs
  { figmaPage: "Inputs", figmaName: "Input Field", importFrom: "primitives", name: "InputField" },
  { figmaPage: "Inputs", figmaName: "Textarea Field", importFrom: "primitives", name: "TextareaField" },
  { figmaPage: "Inputs", figmaName: "Select Field", importFrom: "primitives", name: "SelectField" },
  { figmaPage: "Inputs", figmaName: "Search", importFrom: "primitives", name: "Search" },
  { figmaPage: "Inputs", figmaName: "Slider Field", importFrom: "primitives", name: "Slider" },
  { figmaPage: "Inputs", figmaName: "Switch Field", importFrom: "primitives", name: "Switch" },
  { figmaPage: "Inputs", figmaName: "Checkbox Field", importFrom: "primitives", name: "Checkbox" },
  { figmaPage: "Inputs", figmaName: "Checkbox Group", importFrom: "primitives", name: "Checkbox" },
  { figmaPage: "Inputs", figmaName: "Radio Field", importFrom: "primitives", name: "Radio" },
  { figmaPage: "Inputs", figmaName: "Radio Group", importFrom: "primitives", name: "Radio" },

  // Tabs
  { figmaPage: "Tabs", figmaName: "Tabs", importFrom: "primitives", name: "Tabs" },
  { figmaPage: "Tabs", figmaName: "Tab", importFrom: "primitives", name: "Tab" },

  // Text
  { figmaPage: "Text", figmaName: "Text", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Content Heading", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Content Title", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Price", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Link List", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text List", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Small", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Code", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Strong", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Link", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Emphasis", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Subheading", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Subtitle", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Title Page", importFrom: "primitives", name: "Text" },
  { figmaPage: "Text", figmaName: "Text Title Hero", importFrom: "primitives", name: "Text" },

  // Other primitives
  { figmaPage: "Tooltip", figmaName: "Tooltip", importFrom: "primitives", name: "Tooltip" },
  { figmaPage: "Tags", figmaName: "Tag", importFrom: "primitives", name: "Tag" },
  { figmaPage: "Accordion", figmaName: "Accordion", importFrom: "primitives", name: "Accordion" },
  { figmaPage: "Accordion", figmaName: "Accordion Item", importFrom: "primitives", name: "Accordion" },
  { figmaPage: "Avatars", figmaName: "Avatar", importFrom: "primitives", name: "Avatar" },
  { figmaPage: "Dialog", figmaName: "Dialog", importFrom: "primitives", name: "Dialog" },
  { figmaPage: "Dialog", figmaName: "Dialog Body", importFrom: "primitives", name: "Dialog" },
  { figmaPage: "Menu", figmaName: "Menu", importFrom: "primitives", name: "Menu" },
  { figmaPage: "Navigation", figmaName: "Navigation Button", importFrom: "primitives", name: "Navigation" },
  { figmaPage: "Notification", figmaName: "Notification", importFrom: "primitives", name: "Notification" },
  { figmaPage: "Pagination", figmaName: "Pagination", importFrom: "primitives", name: "Pagination" },
  { figmaPage: "Pagination", figmaName: "Pagination List", importFrom: "primitives", name: "Pagination" },
  { figmaPage: "Pagination", figmaName: "Pagination Page", importFrom: "primitives", name: "Pagination" },
  { figmaPage: "Pagination", figmaName: "Pagination Next", importFrom: "primitives", name: "Pagination" },
  { figmaPage: "Pagination", figmaName: "Pagination Previous", importFrom: "primitives", name: "Pagination" },
  { figmaPage: "Pagination", figmaName: "Pagination Gap", importFrom: "primitives", name: "Pagination" },

  // Cards (compositions)
  { figmaPage: "Cards", figmaName: "Card", importFrom: "compositions", name: "Card" },

  // Sections / Heroes (compositions)
  { figmaPage: "Sections", figmaName: "Hero Form", importFrom: "compositions", name: "Hero" },
  { figmaPage: "Sections", figmaName: "Hero Basic", importFrom: "compositions", name: "Hero" },
  { figmaPage: "Sections", figmaName: "Hero Image", importFrom: "compositions", name: "Hero" },
  { figmaPage: "Sections", figmaName: "Hero Newsletter", importFrom: "compositions", name: "Hero" },
  { figmaPage: "Sections", figmaName: "Hero Actions", importFrom: "compositions", name: "Hero" },

  // Forms (compositions)
  { figmaPage: "Forms", figmaName: "Form Contact", importFrom: "compositions", name: "FormBox" },
  { figmaPage: "Forms", figmaName: "Form Log In", importFrom: "compositions", name: "FormBox" },
  { figmaPage: "Forms", figmaName: "Form Register", importFrom: "compositions", name: "FormBox" },
  { figmaPage: "Forms", figmaName: "Form Newsletter", importFrom: "compositions", name: "FormBox" },
  { figmaPage: "Forms", figmaName: "Form Shipping", importFrom: "compositions", name: "FormBox" }
  ],
  // Child/slot hints by container (used only for metadata or future refinement)
  slots: {
    Hero: ["TextContentTitle", "FormBox"],
    FormBox: ["InputField", "TextareaField", "ButtonGroup", "Button"],
    Navigation: ["Link"],
  }
};

// Feature flag: when true, return multiple sections (Imports/Component/Metadata)
const MULTI_SECTION_OUTPUT = false;
// Detection-only phase: emit a plaintext mapping report (no JSX codegen)
const DETECTION_ONLY = true;

function mapFigmaToSdsByName(componentPage, componentName) {
  if (!componentName) return null;
  const entry = REGISTRY.nameMap.find(
    (e) => e.figmaName === componentName && (!e.figmaPage || e.figmaPage === componentPage)
  );
  if (entry) return { importFrom: entry.importFrom, name: entry.name };
  // Fallback: name-only match when page is unavailable (e.g., frames in instances)
  const loose = REGISTRY.nameMap.find((e) => e.figmaName === componentName);
  return loose ? { importFrom: loose.importFrom, name: loose.name } : null;
}

function getComponentInfo(node) {
  // Attempt to read instance→component metadata for Code Connect awareness
  try {
    if (node && node.type === "INSTANCE" && node.mainComponent) {
      const comp = node.mainComponent;
      return {
        id: comp.id || null,
        key: comp.key || null,
        name: comp.name || node.name || null,
        page: comp.parent && comp.parent.type === "PAGE" ? comp.parent.name : null
      };
    }
    if (node && (node.type === "COMPONENT" || node.type === "COMPONENT_SET")) {
      return {
        id: node.id || null,
        key: node.key || null,
        name: node.name || null,
        page: node.parent && node.parent.type === "PAGE" ? node.parent.name : null
      };
    }
  } catch (_) {
    // best-effort only
  }
  return { id: null, key: null, name: (node && node.name) ? node.name : null, page: null };
}

function guessSdsComponent(node) {
  const info = getComponentInfo(node);
  const mapped = mapFigmaToSdsByName(info.page, info.name);
  if (mapped) {
    return { importFrom: mapped.importFrom, name: mapped.name, __figma: info };
  }
  // Fallback minimal heuristics if name-only mapping fails
  const lower = (info.name || node.name || "").toLowerCase();
  if (lower.includes("hero")) return { importFrom: "compositions", name: "Hero", __figma: info };
  if (lower.includes("button")) return { importFrom: "primitives", name: "Button", __figma: info };
  if (lower.includes("input")) return { importFrom: "primitives", name: "InputField", __figma: info };
  if (lower.includes("radio")) return { importFrom: "primitives", name: "RadioGroup", __figma: info };
  if (lower.includes("checkbox")) return { importFrom: "primitives", name: "CheckboxGroup", __figma: info };
  if (lower.includes("form")) return { importFrom: "compositions", name: "FormBox", __figma: info };
  return null;
}

function buildImports(components) {
  const bySource = new Map();
  for (const c of components) {
    if (!c) continue;
    const list = bySource.get(c.importFrom) || new Set();
    list.add(c.name);
    bySource.set(c.importFrom, list);
  }
  const lines = ["import React from 'react';"];
  for (const [source, namesSet] of bySource.entries()) {
    const names = Array.from(namesSet).sort();
    lines.push(`import { ${names.join(', ')} } from '${source}';`);
  }
  return lines.join("\n");
}

const MAX_NODES_TO_SCAN = 500;
let scannedNodeCount = 0;

function traverse(node, visit) {
  if (!node) return;
  if (scannedNodeCount >= MAX_NODES_TO_SCAN) return;
  scannedNodeCount++;
  visit(node);
  // Only descend into typical design-container nodes to avoid huge walks
  var hasChildren = node && (node.type === "FRAME" || node.type === "GROUP" || node.type === "COMPONENT" || node.type === "INSTANCE");
  if (!hasChildren) return;
  var children = Array.isArray(node.children) ? node.children : [];
  for (var i = 0; i < children.length; i++) {
    if (scannedNodeCount >= MAX_NODES_TO_SCAN) break;
    traverse(children[i], visit);
  }
}

function buildComponentBody(rootName, rootNode) {
  scannedNodeCount = 0;
  const collected = [];
  traverse(rootNode, (n) => collected.push(n));
  // Cap nodes/components to keep under Dev Mode timeouts and VM limits
  const MAX_COMPONENTS = 120;
  const guessed = collected.map(guessSdsComponent).filter(Boolean).slice(0, MAX_COMPONENTS);
  if (DETECTION_ONLY) {
    const lines = [];
    const seen = new Set();
    const cc = { components: [] };
    for (var i = 0; i < guessed.length; i++) {
      var g = guessed[i];
      var key = g.importFrom + ":" + g.name;
      if (seen.has(key)) continue;
      seen.add(key);
      var fig = g.__figma || {};
      var importPath = g.importFrom + "/" + g.name;
      lines.push(
        "Component='" + g.name + "' | Source='" + g.importFrom + "'" +
        (fig.name ? " | FigmaName='" + fig.name + "'" : "") +
        (fig.page ? " | Page='" + fig.page + "'" : "") +
        (fig.id ? " | Id='" + fig.id + "'" : "") +
        (fig.key ? " | Key='" + fig.key + "'" : "") +
        " | Import=\"" + importPath + "\""
      );
      cc.components.push({
        component: g.name,
        source: g.importFrom,
        import: importPath,
        figma: { name: fig.name || null, page: fig.page || null, id: fig.id || null, key: fig.key || null }
      });
    }
    const report = lines.join("\n");

    // Extract first two text nodes for title/subtitle fill
    var texts = [];
    for (var ti = 0; ti < collected.length; ti++) {
      var n = collected[ti];
      if (n && n.type === "TEXT" && typeof n.characters === "string") {
        var t = n.characters.trim();
        if (t) texts.push(t);
      }
      if (texts.length >= 2) break;
    }
    var title = texts[0] || "Title";
    var subtitle = texts[1] || "Subtitle";
    // Extract button labels dynamically from button instances' text descendants
    var buttonLabels = [];
    for (var bi = 0; bi < collected.length; bi++) {
      var bn = collected[bi];
      if (!bn || bn.type !== "INSTANCE") continue;
      var binfo = getComponentInfo(bn);
      var bname = (binfo.name || "").toLowerCase();
      if (bname.indexOf("button") === -1) continue;
      var label = null;
      try {
        if ("findAll" in bn && typeof bn.findAll === "function") {
          var textsInBtn = bn.findAll(function (child) { return child.type === "TEXT"; }) || [];
          for (var x = 0; x < textsInBtn.length; x++) {
            var txt = textsInBtn[x];
            if (txt && typeof txt.characters === "string" && txt.characters.trim()) { label = txt.characters.trim(); break; }
          }
        }
      } catch (_) { /* ignore */ }
      if (!label) label = "Button";
      buttonLabels.push(label);
    }
    var hasHero = guessed.some(function (c) { return c.name === "Hero" && c.importFrom === "compositions"; });
    var hasText = guessed.some(function (c) { return c.name === "Text" && c.importFrom === "primitives"; });
    var hasButtonGroup = guessed.some(function (c) { return c.name === "ButtonGroup" && c.importFrom === "primitives"; });
    var hasButton = guessed.some(function (c) { return c.name === "Button" && c.importFrom === "primitives"; });
    var filledImports = "import React from 'react';\n" +
      (hasHero ? "import { Hero } from 'compositions';\n" : "") +
      (hasText ? "import { Text } from 'primitives';\n" : "") +
      (hasButtonGroup ? "import { ButtonGroup } from 'primitives';\n" : "") +
      (hasButton ? "import { Button } from 'primitives';\n" : "");
    var filledBody = filledImports +
      "\nconst ExampleFilled = () => {\n  return (\n" +
      (hasHero ? "    <Hero>\n" : "    <div>\n") +
      (hasText ? "      <Text>" + title.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + "</Text>\n" : "      {/* " + title + " */}\n") +
      (hasText ? "      <Text>" + subtitle.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + "</Text>\n" : "      {/* " + subtitle + " */}\n") +
      (hasButtonGroup && buttonLabels.length ? (
        "      <ButtonGroup>\n" + buttonLabels.map(function(lbl){return "        <Button>" + lbl.replace(/\\/g, "\\\\").replace(/"/g,'\\"') + "</Button>";}).join("\n") + "\n      </ButtonGroup>\n"
      ) : (hasButton && buttonLabels.length ? buttonLabels.map(function(lbl){return "      <Button>" + lbl.replace(/\\/g, "\\\\").replace(/"/g,'\\"') + "</Button>\n";}).join("") : "")) +
      (hasHero ? "    </Hero>\n" : "    </div>\n") +
      "  );\n};\n\nexport default ExampleFilled;\n";

    // Attach simple prop fills into the mapping object (title/subtitle/buttons)
    if (hasText) {
      cc.textContentTitle = { title: title, subtitle: subtitle };
    }
    if (buttonLabels.length) {
      cc.buttons = buttonLabels;
    }

    return { detectionReport: report.length ? report : "No components detected.", filledCode: filledBody, codeConnect: JSON.stringify(cc, null, 2) };
  }

  // Placeholder for future codegen path (disabled in detection phase)
  const imports = buildImports(guessed);
  const componentName = sanitizeComponentName(rootName || "GeneratedComponent");
  const body = imports + "\n\nconst " + componentName + " = () => {\n  return (\n    <div />\n  );\n};\n\nexport default " + componentName + ";\n";
  return body;
}

if (figma && figma.editorType === "dev" && figma.mode === "codegen") {
  figma.codegen.on("generate", async function (payload) {
    try {
      const root = payload && payload.node ? payload.node : null;
      const selectionName = getNodeName(root);

      const result = buildComponentBody(selectionName, root);
      if (DETECTION_ONLY && result && result.detectionReport) {
        return [
          { title: "Detected Components", language: "PLAINTEXT", code: result.detectionReport },
          result.codeConnect ? { title: "Code Connect Mapping (draft)", language: "JSON", code: result.codeConnect } : null,
          result.filledCode ? { title: "Filled Example", language: "TYPESCRIPT", code: result.filledCode } : null
        ].filter(function (x) { return !!x; });
      }
      if (!MULTI_SECTION_OUTPUT || typeof result === "string") {
        const code = typeof result === "string" ? result : "";
        return [ { title: "React (SDS)", language: "TYPESCRIPT", code } ];
      }
      return [ { title: "Component", language: "TYPESCRIPT", code: result.body } ];
    } catch (error) {
      const message = error && error.message ? error.message : String(error);
      return [
        {
          title: "Error",
          language: "PLAINTEXT",
          code: "Codegen failed: " + message
        }
      ];
    }
  });
}


