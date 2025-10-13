// ===== SDS CODE CONNECT INTEGRATION =====
// This module integrates with existing Code Connect mappings instead of hardcoded detection
// Uses documentUrlSubstitutions from config.js to identify and map components

/**
 * Code Connect based component detection system
 * Replaces hardcoded SDS_COMPONENT_PATTERNS with dynamic Code Connect integration
 */
class SDSCodeConnectDetector {
  constructor(configManager) {
    this.config = configManager;
    this.componentMappings = this.createComponentMappings();
  }

  /**
   * Create component mappings from Code Connect configuration
   */
  createComponentMappings() {
    const urlSubstitutions = this.config.getDocumentUrlSubstitutions();
    const mappings = new Map();

    // Map each Code Connect key to component information
    for (const [key, url] of Object.entries(urlSubstitutions)) {
      const mapping = this.parseCodeConnectKey(key, url);
      if (mapping) {
        mappings.set(key, mapping);
        // Also map by component name for easier lookup
        mappings.set(mapping.component.toLowerCase(), mapping);
      }
    }

    return mappings;
  }

  /**
   * Parse Code Connect key to extract component information
   * Key format: <FIGMA_[PAGE]_[COMPONENT]>
   */
  parseCodeConnectKey(key, url) {
    // Remove < > brackets and split by underscore
    const cleanKey = key.replace(/[<>]/g, '');
    const parts = cleanKey.split('_');
    
    if (parts.length < 3 || parts[0] !== 'FIGMA') {
      return null;
    }

    const page = parts[1].toLowerCase();
    const component = parts.slice(2).join('_').toLowerCase();
    const nodeId = this.extractNodeIdFromUrl(url);

    return {
      key: key,
      url: url,
      nodeId: nodeId,
      page: page,
      component: component,
      ...this.getComponentDetails(page, component)
    };
  }

  /**
   * Extract node ID from Figma URL
   */
  extractNodeIdFromUrl(url) {
    const match = url.match(/node-id=([^&]+)/);
    return match ? match[1] : null;
  }

  /**
   * Get component details based on page and component name
   */
  getComponentDetails(page, component) {
    // Map Code Connect components to SDS components
    const componentMap = {
      // Buttons
      'buttons_button': {
        component: 'Button',
        import: "import { Button } from 'primitives';",
        path: 'src/ui/primitives/Button',
        type: 'button',
        props: ['variant', 'size', 'children']
      },
      'buttons_icon_button': {
        component: 'IconButton', 
        import: "import { IconButton } from 'primitives';",
        path: 'src/ui/primitives/IconButton',
        type: 'button',
        props: ['variant', 'size', 'icon']
      },

      // Inputs
      'inputs_input_field': {
        component: 'Input',
        import: "import { Input } from 'primitives';",
        path: 'src/ui/primitives/Input',
        type: 'input',
        props: ['label', 'placeholder', 'value', 'type']
      },
      'inputs_search': {
        component: 'Search',
        import: "import { Search } from 'primitives';",
        path: 'src/ui/primitives/Search', 
        type: 'input',
        props: ['placeholder', 'value']
      },
      'inputs_radio_group': {
        component: 'Radio',
        import: "import { Radio } from 'primitives';",
        path: 'src/ui/primitives/Radio',
        type: 'input',
        props: ['options', 'value', 'onChange']
      },

      // Forms
      'forms_form_contact': {
        component: 'FormBox',
        import: "import { FormBox } from 'compositions';",
        path: 'src/ui/compositions/Forms/FormBox',
        type: 'form',
        props: ['title', 'variant', 'children']
      },

      // Sections/Headers
      'sections_header': {
        component: 'Header',
        import: "import { Header } from 'compositions';", 
        path: 'src/ui/compositions/Headers/Header',
        type: 'header',
        props: ['variant', 'children']
      },
      'sections_header_auth': {
        component: 'HeaderAuth',
        import: "import { HeaderAuth } from 'compositions';",
        path: 'src/ui/compositions/Headers/HeaderAuth', 
        type: 'header',
        props: ['user', 'onSignOut']
      },

      // Navigation
      'navigation_navigation_pill': {
        component: 'NavigationPill',
        import: "import { NavigationPill } from 'primitives';",
        path: 'src/ui/primitives/Navigation',
        type: 'navigation',
        props: ['isSelected', 'children']
      },

      // Cards  
      'cards_card': {
        component: 'Card',
        import: "import { Card } from 'primitives';",
        path: 'src/ui/primitives/Card',
        type: 'card',
        props: ['title', 'children']
      },
      'cards_pricing_card': {
        component: 'PricingCard',
        import: "import { PricingCard } from 'compositions';",
        path: 'src/ui/compositions/Cards/PricingCard',
        type: 'card',
        props: ['title', 'price', 'features', 'variant']
      },

      // Text
      'text_text': {
        component: 'Text',
        import: "import { Text } from 'primitives';",
        path: 'src/ui/primitives/Text',
        type: 'text',
        props: ['children']
      },
      'text_text_heading': {
        component: 'TextHeading',
        import: "import { TextHeading } from 'primitives';",
        path: 'src/ui/primitives/Text', 
        type: 'text',
        props: ['children']
      }
    };

    const key = `${page}_${component}`;
    return componentMap[key] || {
      component: this.capitalize(component),
      import: `import { ${this.capitalize(component)} } from 'primitives';`,
      path: `src/ui/primitives/${this.capitalize(component)}`,
      type: 'unknown',
      props: ['children']
    };
  }

  /**
   * Detect SDS components in a node using Code Connect mappings
   */
  async detectComponents(node) {
    const results = [];

    // Check if this node is a component instance
    if (node.type === 'INSTANCE' && node.mainComponent) {
      const mapping = this.findComponentByNodeId(node.mainComponent.id);
      if (mapping) {
        results.push({
          node: node,
          mapping: mapping,
          confidence: 1.0,
          source: 'code_connect_exact'
        });
      }
    }

    // Check component set (if this is a component)
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      const mapping = this.findComponentByNodeId(node.id);
      if (mapping) {
        results.push({
          node: node,
          mapping: mapping,
          confidence: 1.0,
          source: 'code_connect_exact'
        });
      }
    }

    // Fallback: name-based detection for partial matches
    if (results.length === 0) {
      const nameMapping = this.findComponentByName(node.name);
      if (nameMapping) {
        results.push({
          node: node,
          mapping: nameMapping,
          confidence: 0.7,
          source: 'code_connect_name'
        });
      }
    }

    // Check children recursively
    if (node.children) {
      for (const child of node.children) {
        const childResults = await this.detectComponents(child);
        results.push(...childResults);
      }
    }

    return results;
  }

  /**
   * Find component mapping by Figma node ID
   */
  findComponentByNodeId(nodeId) {
    for (const [key, mapping] of this.componentMappings) {
      if (mapping.nodeId === nodeId) {
        return mapping;
      }
    }
    return null;
  }

  /**
   * Find component mapping by node name (fuzzy matching)
   */
  findComponentByName(nodeName) {
    const name = nodeName.toLowerCase();
    
    // Try exact component name matches first
    for (const [key, mapping] of this.componentMappings) {
      if (name.includes(mapping.component.toLowerCase())) {
        return mapping;
      }
    }

    // Try fuzzy matching with common patterns
    const patterns = {
      'button': ['button', 'btn'],
      'input': ['input', 'field', 'textfield'],
      'form': ['form', 'contact', 'newsletter'],
      'header': ['header', 'nav', 'navigation'],
      'card': ['card', 'pricing'],
      'text': ['text', 'heading', 'title']
    };

    for (const [type, keywords] of Object.entries(patterns)) {
      if (keywords.some(keyword => name.includes(keyword))) {
        // Find first mapping of this type
        for (const [key, mapping] of this.componentMappings) {
          if (mapping.type === type) {
            return mapping;
          }
        }
      }
    }

    return null;
  }

  /**
   * Capitalize first letter of a string
   */
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Get all available component mappings
   */
  getAllMappings() {
    return Array.from(this.componentMappings.values())
      .filter(mapping => mapping.key) // Only include mapped components
      .sort((a, b) => a.component.localeCompare(b.component));
  }

  /**
   * Get mapping by component key
   */
  getMappingByKey(key) {
    return this.componentMappings.get(key);
  }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.SDSCodeConnectDetector = SDSCodeConnectDetector;
}