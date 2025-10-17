const KEY_PREFIX_COLLECTION = `@`;
const NAMESPACE = "com.figma.sds";

exportToJSON();

function recurseVariables(variable, list) {
  const variables = Array.isArray(variable) ? variable : [variable];
  variables.forEach((variable) => {
    if (!variable || !variable.id) return;
    const { name, variableCollectionId, resolvedType, valuesByMode } =
      figma.variables.getVariableById(variable.id);
    const collection =
      figma.variables.getVariableCollectionById(variableCollectionId);
    const modes = collection.modes;
    const isSingleMode = modes.length === 1;
    const item = {
      token: [
        `${KEY_PREFIX_COLLECTION}${sanitizeName(collection.name)}`,
        name,
      ].join("/"),
      collection: collection.name,
      name,
      type: resolvedType,
    };
    if (!isSingleMode) {
      item.modes = {};
    }
    const modeIds = Object.keys(valuesByMode);
    modeIds.forEach((modeId) => {
      const mode = isSingleMode
        ? "Default"
        : modes.find((mode) => mode.modeId === modeId).name;
      let value = valuesByMode[modeId];
      if (value.type === "VARIABLE_ALIAS") {
        const variable = figma.variables.getVariableById(value.id);
        const v = {};
        recurseVariables(variable, v);
        if (isSingleMode) {
          item.value = v;
        } else {
          item.modes[mode] = v;
        }
      } else {
        if (resolvedType === "COLOR") {
          value = rgbToHex(value);
        }
        if (isSingleMode) {
          item.value = value;
        } else {
          item.modes[mode] = value;
        }
      }
    });
    if (Array.isArray(list)) {
      list.push(item);
    } else {
      for (let key in item) {
        list[key] = item[key];
      }
    }
  });
}

async function exportToJSON() {
  const collections = figma.variables.getLocalVariableCollections();
  const object = {};
  const { idToKey } = uniqueKeyIdMaps(collections, "id", KEY_PREFIX_COLLECTION);

  collections.forEach(
    (collection) =>
      (object[idToKey[collection.id]] = collectionAsJSON(idToKey, collection)),
  );

  const effects = await getEffects();

  // Handle messages from UI
  figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-pull-request') {
      try {
        // Get the tokens data
        const tokensData = msg.data.variables;
        const tokensJson = JSON.stringify(tokensData, null, 2);
        
        // Copy to clipboard as fallback
        figma.ui.postMessage({
          type: 'copy-to-clipboard',
          data: tokensJson
        });
        
        // Show success message with instructions
        figma.notify('✅ Tokens copied to clipboard! Paste into scripts/tokens/tokens.json and run "npm run github:pr:create"', { timeout: 8000 });
        
        // Close plugin
        figma.closePlugin('Tokens copied to clipboard! Paste into tokens.json and run npm run github:pr:create');
        
      } catch (error) {
        figma.notify(`❌ Error processing tokens: ${error.message}`, { timeout: 5000 });
      }
    }
  };

  figma.showUI(
    [
      `<style>
        body { 
          margin: 0; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--figma-color-bg);
          color: var(--figma-color-text);
        }
        .tab-container {
          display: flex;
          border-bottom: 1px solid var(--figma-color-border);
          background: var(--figma-color-bg-secondary);
        }
        .tab {
          padding: 8px 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          color: var(--figma-color-text-secondary);
          border-bottom: 2px solid transparent;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .tab:hover {
          color: var(--figma-color-text);
          background: var(--figma-color-bg-hover);
        }
        .tab.active {
          color: var(--figma-color-text);
          border-bottom-color: var(--figma-color-border-brand);
        }
        .tab-content {
          display: none;
          height: calc(100vh - 120px);
          position: relative;
          margin-bottom: 60px;
        }
        .tab-content.active {
          display: block;
        }
        .code-area {
            width: 94%;
            height: 96%;
            padding: 16px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 11px;
            line-height: 1.4;
            background: var(--figma-color-bg-tertiary);
            color: var(--figma-color-text);
            overflow-y: visible;
            overflow-x: hidden;
            white-space: pre-wrap;
            word-wrap: break-word;
            border: 1px solid var(--figma-color-border);
            border-radius: 6px;
            margin: 8px;
            outline: none;
            resize: none;
        }
        .code-area::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .code-area::-webkit-scrollbar-track {
          background: var(--figma-color-bg-secondary);
        }
        .code-area::-webkit-scrollbar-thumb {
          background: var(--figma-color-border);
          border-radius: 3px;
        }
        .code-area::-webkit-scrollbar-thumb:hover {
          background: var(--figma-color-border-strong);
        }
        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--figma-color-bg-secondary);
          border-top: 1px solid var(--figma-color-border);
          padding: 12px 16px;
          display: flex;
          gap: 12px;
          z-index: 1000;
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
          height: 60px;
          box-sizing: border-box;
        }
        .copy-btn {
          padding: 8px 16px;
          border: 1px solid var(--figma-color-border);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
          background: var(--figma-color-bg);
          color: var(--figma-color-text);
        }
        .copy-btn:hover {
          background: var(--figma-color-bg-hover);
          border-color: var(--figma-color-border-strong);
        }
        .copy-btn:active {
          background: var(--figma-color-bg-pressed);
        }
        .pr-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
          background: var(--figma-color-bg-brand, #007AFF);
          color: var(--figma-color-text-onbrand, white);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .pr-btn:hover {
          background: var(--figma-color-bg-brand-hover, #0056CC);
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        .pr-btn:active {
          background: var(--figma-color-bg-brand-pressed, #004499);
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .pr-btn:disabled {
          background: var(--figma-color-bg-disabled, #ccc);
          color: var(--figma-color-text-disabled, #666);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
      </style>`,
      `<div class="tab-container">
        <button class="tab active" onclick="showTab('variables')">Variables JSON</button>
        <button class="tab" onclick="showTab('effects')">Effects JSON</button>
      </div>
      <div class="tab-content active" id="variables">
        <div class="code-area" id="variables-code">${JSON.stringify(object, null, 2)}</div>
      </div>
      <div class="tab-content" id="effects">
        <div class="code-area" id="effects-code">${effects}</div>
      </div>
    <div class="footer">
      <button class="copy-btn" onclick="copyToClipboard()">Copy Current Tab</button>
      <button class="pr-btn" onclick="createPullRequest()">Create Pull Request</button>
    </div>
      <script>
        function showTab(tabName) {
          // Update current tab
          currentTab = tabName;
          
          // Hide all tab contents
          document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
          });
          // Remove active class from all tabs
          document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
          });
          // Show selected tab content
          document.getElementById(tabName).classList.add('active');
          // Add active class to clicked tab
          event.target.classList.add('active');
        }
        
        let currentTab = 'variables';
        
        function copyToClipboard() {
          const codeArea = document.getElementById(currentTab + '-code');
          const content = codeArea.textContent;
          
          // Create a temporary textarea to copy content
          const tempTextarea = document.createElement('textarea');
          tempTextarea.value = content;
          document.body.appendChild(tempTextarea);
          tempTextarea.select();
          document.execCommand('copy');
          document.body.removeChild(tempTextarea);
          
          // Visual feedback
          const btn = event.target;
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.style.background = '#28a745';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#007AFF';
          }, 1500);
        }
        
        function createPullRequest() {
          const prBtn = document.querySelector('.pr-btn');
          const originalText = prBtn.textContent;
          
          // Disable button and show loading state
          prBtn.disabled = true;
          prBtn.textContent = 'Processing...';
          
          // Get the current tokens data
          const variablesData = document.getElementById('variables-code').textContent;
          const effectsData = document.getElementById('effects-code').textContent;
          
          try {
            // Send message to parent (Figma plugin) to trigger PR creation
            parent.postMessage({
              pluginMessage: {
                type: 'create-pull-request',
                data: {
                  variables: JSON.parse(variablesData),
                  effects: effectsData,
                  timestamp: new Date().toISOString()
                }
              }
            }, '*');
            
            // Update button to show success
            prBtn.textContent = 'Copied to Clipboard!';
            prBtn.style.background = '#28a745';
            
          } catch (error) {
            // Show error state
            prBtn.textContent = 'Error!';
            prBtn.style.background = '#dc3545';
            console.error('Error creating PR:', error);
          }
          
          // Reset button after a delay
          setTimeout(() => {
            prBtn.disabled = false;
            prBtn.textContent = originalText;
            prBtn.style.background = '#007AFF';
          }, 3000);
        }
        
        // Listen for messages from the plugin
        window.addEventListener('message', (event) => {
          if (event.data.pluginMessage && event.data.pluginMessage.type === 'copy-to-clipboard') {
            // Copy the tokens data to clipboard
            navigator.clipboard.writeText(event.data.pluginMessage.data).then(() => {
              console.log('Tokens copied to clipboard');
            }).catch(err => {
              console.error('Failed to copy to clipboard:', err);
            });
          }
        });
        
      </script>`,
    ].join("\n"),
    {
      width: 800,
      height: 600,
    },
  );
}

function collectionAsJSON(
  collectionIdToKeyMap,
  { name, modes, variableIds, id: figmaId },
) {
  const collection = {};
  const { idToKey, keyToId } = uniqueKeyIdMaps(modes, "modeId");
  const modeKeys = Object.values(idToKey);
  collection.$extensions = {
    [NAMESPACE]: { figmaId, modes: modeKeys },
  };
  variableIds.forEach((variableId) => {
    const { name, resolvedType, valuesByMode, description } =
      figma.variables.getVariableById(variableId);
    const value = valuesByMode[keyToId[modeKeys[0]]];
    const fontWeight =
      resolvedType === "FLOAT" &&
      Boolean(name.match(/\/?weight/i)) &&
      "fontWeight";
    const fontFamily =
      resolvedType === "STRING" &&
      Boolean(name.match(/\/?family/i)) &&
      "fontFamily";
    if (
      (value !== undefined &&
        ["COLOR", "FLOAT", "STRING"].includes(resolvedType)) ||
      fontFamily
    ) {
      let obj = collection;
      name.split("/").forEach((groupName) => {
        const safeName = groupName
          .split(/[^\da-zA-Z]+/)
          .join("-")
          .toLowerCase();
        obj[safeName] = obj[safeName] || {};
        obj = obj[safeName];
      });
      obj.$type =
        resolvedType === "COLOR"
          ? "color"
          : resolvedType === "FLOAT"
            ? fontWeight || "number"
            : fontFamily || "unknown";
      obj.$value = valueToJSON(value, resolvedType, collectionIdToKeyMap);
      obj.$description = description || "";
      obj.$extensions = {
        [NAMESPACE]: {
          figmaId: variableId,
          modes: modeKeys.reduce((into, modeKey) => {
            into[modeKey] = valueToJSON(
              valuesByMode[keyToId[modeKey]],
              resolvedType,
              collectionIdToKeyMap,
            );
            return into;
          }, {}),
        },
      };
    }
  });
  return collection;
}

function valueToJSON(value, resolvedType, collectionIdToKeyMap) {
  if (value.type === "VARIABLE_ALIAS") {
    const variable = figma.variables.getVariableById(value.id);
    const prefix = collectionIdToKeyMap[variable.variableCollectionId];
    return `{${prefix}.${variable.name.replace(/\//g, ".")}}`;
  }
  return resolvedType === "COLOR" ? rgbToHex(value) : value;
}

function uniqueKeyIdMaps(nodesWithNames, idKey, prefix = "") {
  const idToKey = {};
  const keyToId = {};
  nodesWithNames.forEach((node) => {
    const key = sanitizeName(node.name);
    let int = 2;
    let uniqueKey = `${prefix}${key}`;
    while (keyToId[uniqueKey]) {
      uniqueKey = `${prefix}${key}_${int}`;
      int++;
    }
    keyToId[uniqueKey] = node[idKey];
    idToKey[node[idKey]] = uniqueKey;
  });
  return { idToKey, keyToId };
}

function sanitizeName(name) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/^ +/, "")
    .replace(/ +$/, "")
    .replace(/ +/g, "_")
    .toLowerCase();
}

function rgbToHex(color) {
  const toHex = function(value) {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hex = [toHex(color.r), toHex(color.g), toHex(color.b)];
  if (color.a !== 1) {
    hex.push(toHex(color.a));
  }
  return `#${hex.join("")}`;
}

function RGBAToHexA(rgba, forceRemoveAlpha) {
  if (forceRemoveAlpha === undefined) {
    forceRemoveAlpha = false;
  }
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter(function(string, index) { return !forceRemoveAlpha || index !== 3; })
      .map(function(string) { return parseFloat(string); }) // Converts them to numbers
      .map(function(number, index) { return index === 3 ? Math.round(number * 255) : number; }) // Converts alpha to 255 number
      .map(function(number) { return number.toString(16); }) // Converts numbers to hex
      .map(function(string) { return string.length === 1 ? "0" + string : string; }) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to togehter to a string
}

function colorToHex(color) {
  return RGBAToHexA(
    `rgba(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)}, ${color.a})`,
  );
}

async function getEffects() {
  const payload = [];
  (await figma.getLocalEffectStylesAsync()).forEach(
    function(effectStyle) {
      const type = effectStyle.type;
      const name = effectStyle.name;
      const effects = effectStyle.effects;
      const newEffects = effects
        .filter(function(a) { return a.visible; })
        .map(function(effect) {
          const variables = {};
          for (let property in effect.boundVariables) {
            variables[property] = figma.variables.getVariableById(
              effect.boundVariables[property].id,
            ).name;
          }
          const hex = effect.color ? colorToHex(effect.color) : null;
          const newEffect = Object.assign({}, effect);
          newEffect.hex = hex;
          newEffect.variables = variables;
          return newEffect;
        });
      payload.push(JSON.stringify({ type: type, name: name, effects: newEffects }));
    },
  );
  (await figma.getLocalPaintStylesAsync()).forEach(function(paintStyle) {
    const type = paintStyle.type;
    const name = paintStyle.name;
    const paints = paintStyle.paints;
    const newPaints = paints
      .filter(function(a) { return a.visible; })
      .map(function(paint) {
        const variables = {};
        for (let property in paint.boundVariables) {
          variables[property] = figma.variables.getVariableById(
            paint.boundVariables[property].id,
          ).name;
        }
        const newPaint = Object.assign({}, paint);
        newPaint.variables = variables;
        return newPaint;
      });
    payload.push(JSON.stringify({ type: type, name: name, paints: newPaints }));
  });
  (await figma.getLocalTextStylesAsync()).forEach(
    function(textStyle) {
      const type = textStyle.type;
      const name = textStyle.name;
      const fontSize = textStyle.fontSize;
      const textDecoration = textStyle.textDecoration;
      const fontName = textStyle.fontName;
      const letterSpacing = textStyle.letterSpacing;
      const lineHeight = textStyle.lineHeight;
      const leadingTrim = textStyle.leadingTrim;
      const paragraphIndent = textStyle.paragraphIndent;
      const paragraphSpacing = textStyle.paragraphSpacing;
      const listSpacing = textStyle.listSpacing;
      const handingPunctiation = textStyle.handingPunctiation;
      const handlingList = textStyle.handlingList;
      const textCase = textStyle.textCase;
      const boundVariables = textStyle.boundVariables;
      
      const variables = {};
      for (let property in boundVariables) {
        variables[property] = figma.variables.getVariableById(
          boundVariables[property].id,
        ).name;
      }
      payload.push(
        JSON.stringify({
          type: type,
          name: name,
          fontSize: fontSize,
          textDecoration: textDecoration,
          fontName: fontName,
          letterSpacing: letterSpacing,
          lineHeight: lineHeight,
          leadingTrim: leadingTrim,
          paragraphIndent: paragraphIndent,
          paragraphSpacing: paragraphSpacing,
          listSpacing: listSpacing,
          handingPunctiation: handingPunctiation,
          handlingList: handlingList,
          textCase: textCase,
          boundVariables: boundVariables,
          variables: variables,
        }),
      );
    },
  );
  return `[${payload.join(",\n")}]`;
}
