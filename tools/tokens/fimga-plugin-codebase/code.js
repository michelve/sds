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
    var hasAvatar = guessed.some(function (c) { return (c.name === "Avatar" || c.name === "AvatarBlock" || c.name === "AvatarGroup") && c.importFrom === "primitives"; });
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

    // Load design system rules for detected components
    var rulesContent = "";
    var detectedComponents = guessed.filter(function(c) { return c.name && c.importFrom; });
    
    if (detectedComponents.length > 0) {
      // Check if Button is detected and load its rules
      if (hasButton) {
        rulesContent = "# Button Design Rules\n\n" +
          "## Usage Guidelines\n" +
          "- Use primary buttons for main actions (Submit, Save, Continue)\n" +
          "- Use neutral buttons for secondary actions (Cancel, Back)\n" +
          "- Use subtle buttons for tertiary actions (Skip, Learn More)\n" +
          "- Use danger buttons for destructive actions (Delete, Remove)\n\n" +
          "## Accessibility\n" +
          "- Always provide clear, descriptive labels\n" +
          "- Ensure sufficient color contrast\n" +
          "- Support keyboard navigation\n" +
          "- Use appropriate button sizes for touch targets\n\n" +
          "## States\n" +
          "- Default: Ready for interaction\n" +
          "- Hover: Visual feedback on mouse over\n" +
          "- Active: Pressed state\n" +
          "- Disabled: Non-interactive state\n" +
          "- Loading: Processing state with spinner\n\n" +
          "## Do's and Don'ts\n" +
          "✅ Do: Use consistent button hierarchy\n" +
          "✅ Do: Group related actions together\n" +
          "✅ Do: Use clear, action-oriented labels\n" +
          "❌ Don't: Use buttons for navigation (use links instead)\n" +
          "❌ Don't: Mix button styles inconsistently\n" +
          "❌ Don't: Use vague labels like 'Click here'";
      } else if (hasText) {
        rulesContent = "# Text Design Rules\n\n" +
          "## Text Hierarchy\n" +
          "- **TextHeading**: Main page titles and section headers\n" +
          "- **TextSubheading**: Secondary headings and subsection titles\n" +
          "- **TextTitleHero**: Large hero text for landing pages\n" +
          "- **TextTitlePage**: Page-level titles and main headings\n" +
          "- **Text**: Body text for paragraphs and general content\n" +
          "- **TextEmphasis**: Highlighted or emphasized text\n" +
          "- **TextStrong**: Bold text for important information\n" +
          "- **TextSmall**: Captions, footnotes, and secondary information\n" +
          "- **TextCode**: Code snippets and technical content\n" +
          "- **TextLink**: Interactive links and navigation text\n" +
          "- **TextPrice**: Pricing information and monetary values\n\n" +
          "## Usage Guidelines\n" +
          "- Use consistent text hierarchy throughout your design\n" +
          "- Maintain proper contrast ratios for accessibility\n" +
          "- Choose appropriate text sizes for different screen sizes\n" +
          "- Use semantic text variants (don't style regular text to look like headings)\n\n" +
          "## Color Variants\n" +
          "- **Default**: Standard text color for most content\n" +
          "- **Subtle**: Secondary information and less important text\n" +
          "- **Brand**: Brand-colored text for highlights and CTAs\n" +
          "- **Danger**: Error messages and destructive actions\n" +
          "- **Positive**: Success messages and confirmations\n" +
          "- **Warning**: Cautionary information and alerts\n\n" +
          "## Accessibility\n" +
          "- Ensure minimum 4.5:1 contrast ratio for normal text\n" +
          "- Ensure minimum 3:1 contrast ratio for large text (18pt+)\n" +
          "- Use semantic HTML elements when possible\n" +
          "- Provide alternative text for images\n" +
          "- Support screen readers with proper heading structure\n\n" +
          "## Typography Scale\n" +
          "- **Hero**: 48px+ for main headlines\n" +
          "- **Page Title**: 32px-40px for page headers\n" +
          "- **Heading**: 24px-32px for section headers\n" +
          "- **Subheading**: 18px-24px for subsection titles\n" +
          "- **Body**: 16px for main content\n" +
          "- **Small**: 14px for captions and footnotes\n" +
          "- **Code**: Monospace font for technical content\n\n" +
          "## Do's and Don'ts\n" +
          "✅ Do: Use consistent text hierarchy\n" +
          "✅ Do: Choose appropriate color variants for context\n" +
          "✅ Do: Maintain proper line height for readability\n" +
          "✅ Do: Use semantic text components\n" +
          "❌ Don't: Mix text sizes inconsistently\n" +
          "❌ Don't: Use low contrast text colors\n" +
          "❌ Don't: Style regular text to look like headings\n" +
          "❌ Don't: Use text colors that don't match their semantic meaning\n\n" +
          "## Responsive Behavior\n" +
          "- Text sizes should scale appropriately on mobile devices\n" +
          "- Maintain readability across all screen sizes\n" +
          "- Consider touch targets for interactive text elements\n" +
          "- Use appropriate line lengths (45-75 characters per line)";
      } else if (hasAvatar) {
        rulesContent = "# Avatar Design Rules\n\n" +
          "## Avatar Types\n" +
          "- **Avatar**: Individual user profile pictures\n" +
          "- **AvatarBlock**: Avatar with name and username text\n" +
          "- **AvatarGroup**: Multiple avatars displayed together\n\n" +
          "## Usage Guidelines\n" +
          "- Use avatars to represent users, team members, or profile pictures\n" +
          "- Always provide fallback initials when no image is available\n" +
          "- Use consistent sizing across your application\n" +
          "- Consider accessibility with proper alt text and contrast\n\n" +
          "## Size Variants\n" +
          "- **Small**: 24px - For compact spaces, lists, and secondary contexts\n" +
          "- **Medium**: 32px - Default size for most use cases\n" +
          "- **Large**: 48px - For prominent displays and user profiles\n" +
          "- **Extra Large**: 64px+ - For hero sections and main user displays\n\n" +
          "## Avatar States\n" +
          "- **Default**: Normal display with image or initials\n" +
          "- **Loading**: Placeholder state while image loads\n" +
          "- **Error**: Fallback state when image fails to load\n" +
          "- **Online**: Green indicator for active users\n" +
          "- **Offline**: Gray indicator for inactive users\n" +
          "- **Away**: Yellow indicator for temporarily unavailable users\n\n" +
          "## Accessibility\n" +
          "- Provide meaningful alt text for screen readers\n" +
          "- Ensure sufficient contrast for initials fallback\n" +
          "- Use semantic HTML elements when possible\n" +
          "- Support keyboard navigation for interactive avatars\n" +
          "- Provide text alternatives for status indicators\n\n" +
          "## AvatarBlock Guidelines\n" +
          "- Use for user cards, comments, and profile displays\n" +
          "- Keep name text concise and readable\n" +
          "- Username should be secondary information\n" +
          "- Maintain consistent spacing between avatar and text\n" +
          "- Use appropriate text hierarchy (name > username)\n\n" +
          "## AvatarGroup Guidelines\n" +
          "- Limit to 3-4 visible avatars to maintain clarity\n" +
          "- Use \"+X\" indicator for additional users\n" +
          "- Maintain consistent spacing between avatars\n" +
          "- Consider hover states to show full user list\n" +
          "- Use appropriate sizing for the context\n\n" +
          "## Color Guidelines\n" +
          "- Use brand colors for status indicators\n" +
          "- Ensure initials have sufficient contrast\n" +
          "- Use neutral colors for offline/inactive states\n" +
          "- Consider colorblind accessibility for status colors\n\n" +
          "## Do's and Don'ts\n" +
          "✅ Do: Use consistent avatar sizing throughout your app\n" +
          "✅ Do: Provide meaningful fallback initials\n" +
          "✅ Do: Use appropriate status indicators\n" +
          "✅ Do: Maintain proper spacing in groups\n" +
          "✅ Do: Consider loading and error states\n" +
          "❌ Don't: Use avatars for non-human entities\n" +
          "❌ Don't: Mix different avatar sizes inconsistently\n" +
          "❌ Don't: Use low contrast colors for initials\n" +
          "❌ Don't: Overcrowd avatar groups\n" +
          "❌ Don't: Use generic placeholder images\n\n" +
          "## Responsive Behavior\n" +
          "- Scale avatar sizes appropriately on mobile devices\n" +
          "- Maintain touch targets for interactive avatars\n" +
          "- Consider smaller groups on mobile screens\n" +
          "- Ensure text remains readable at all sizes\n" +
          "- Use appropriate spacing for different screen densities\n\n" +
          "## Implementation Notes\n" +
          "- Always handle image loading errors gracefully\n" +
          "- Provide initials as fallback when no image is available\n" +
          "- Use proper aspect ratios (typically square)\n" +
          "- Consider lazy loading for performance\n" +
          "- Implement proper caching for user images";
      } else {
        // Empty state when no rules are available
        rulesContent = "# Design System Rules\n\n" +
          "📝 No design system rules available for the selected component(s).\n\n" +
          "**Available components:** " + detectedComponents.map(function(c) { return c.name; }).join(", ") + "\n\n" +
          "To add design system rules:\n" +
          "1. Create a `ComponentName.figma.rules.md` file in `src/figma/primitives/`\n" +
          "2. Add the component detection logic in the plugin\n" +
          "3. Rules will automatically appear here when the component is selected\n\n" +
          "**Example files to create:**\n" +
          "- `Text.figma.rules.md`\n" +
          "- `Card.figma.rules.md`\n" +
          "- `Input.figma.rules.md`\n" +
          "- `Avatar.figma.rules.md`";
      }
    } else {
      // Empty state when no components are detected
      rulesContent = "# Design System Rules\n\n" +
        "🔍 No components detected in the current selection.\n\n" +
        "**To see design system rules:**\n" +
        "1. Select a component instance (Button, Text, Card, etc.)\n" +
        "2. Design system rules will appear here automatically\n\n" +
        "**Available components with rules:**\n" +
        "- Button (✅ Rules available)\n" +
        "- Text (✅ Rules available)\n" +
        "- Avatar (✅ Rules available)\n" +
        "- Card (📝 Rules coming soon)\n" +
        "- Input (📝 Rules coming soon)";
    }

    return { 
      detectionReport: report.length ? report : "No components detected.", 
      filledCode: rulesContent || filledBody, 
      codeConnect: JSON.stringify(cc, null, 2) 
    };
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
          result.filledCode ? { title: "Design System Rules", language: "PLAINTEXT", code: result.filledCode } : null
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


