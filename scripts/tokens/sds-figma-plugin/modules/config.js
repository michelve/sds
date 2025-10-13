// ===== CONFIGURATION MODULE =====
// Centralized configuration management for the SDS Figma Plugin
// Loads configuration from figma.config.json and provides unified access

/**
 * Configuration loader module
 * Handles loading and processing of figma.config.json
 */
class SDSConfigurationManager {
  constructor() {
    this.config = null;
    this.documentUrls = new Map();
    this.initialized = false;
  }

  /**
   * Initialize configuration by loading figma.config.json
   * Attempts to load from the workspace root directory
   */
  async initialize() {
    try {
      console.log('📄 Loading SDS configuration from figma.config.json...');
      
      // In Figma plugin environment, we need to fetch the config
      // This would typically be loaded from the workspace
      const config = await this.loadConfigurationFile();
      
      if (config && config.codeConnect && config.codeConnect.documentUrlSubstitutions) {
        this.config = config;
        this.processDocumentUrls();
        this.initialized = true;
        
        console.log('✅ SDS configuration loaded successfully');
        console.log(`📊 Loaded ${this.documentUrls.size} component URL mappings`);
        
        return this.config;
      } else {
        throw new Error('Invalid configuration structure');
      }
      
    } catch (error) {
      console.error('❌ Error loading SDS configuration:', error);
      
      // Fallback to embedded minimal configuration
      this.loadFallbackConfiguration();
      return this.config;
    }
  }

  /**
   * Load configuration file (simulated for Figma plugin)
   * In a real implementation, this would read from the workspace
   */
  async loadConfigurationFile() {
    // Since Figma plugins can't directly read files from the workspace,
    // we need to embed the configuration or load it through the UI
    // For now, we'll embed the essential parts
    
    return {
      codeConnect: {
        documentUrlSubstitutions: {
          // Essential SDS component mappings from figma.config.json
          "<FIGMA_ICONS_BASE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho",
      "<FIGMA_ACCORDION_ACCORDION_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4634",
      "<FIGMA_ACCORDION_ACCORDION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4779",
      "<FIGMA_AVATARS_AVATAR_BLOCK>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2010-15581",
      "<FIGMA_AVATARS_AVATAR_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=56-15608",
      "<FIGMA_AVATARS_AVATAR>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1103",
      "<FIGMA_BUTTONS_BUTTON_DANGER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=185-852",
      "<FIGMA_BUTTONS_BUTTON_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2072-9432",
      "<FIGMA_BUTTONS_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:426",
      "<FIGMA_BUTTONS_ICON_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=11-11508",
      "<FIGMA_CARDS_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2142-11380",
      "<FIGMA_CARDS_PRICING_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=1444-11846",
      "<FIGMA_CARDS_PRODUCT_INFO_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4465",
      "<FIGMA_CARDS_REVIEW_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-16106",
      "<FIGMA_CARDS_STATS_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-15082",
      "<FIGMA_CARDS_TESTIMONIAL_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7717-3946",
      "<FIGMA_DIALOG_DIALOG>": "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=192-31534",
      "<FIGMA_DIALOG_DIALOG_BODY>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762-696",
      "<FIGMA_FORMS_FORM_CONTACT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19741",
      "<FIGMA_FORMS_FORM_FORGOT_PASSWORD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19744",
      "<FIGMA_FORMS_FORM_LOG_IN>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19740",
      "<FIGMA_FORMS_FORM_NEWSLETTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19743",
      "<FIGMA_FORMS_FORM_REGISTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19742",
      "<FIGMA_FORMS_FORM_SHIPPING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:23153",
      "<FIGMA_INPUTS_CHECKBOX_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1441",
      "<FIGMA_INPUTS_CHECKBOX_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1426",
      "<FIGMA_INPUTS_INPUT_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2263",
      "<FIGMA_INPUTS_RADIO_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1412",
      "<FIGMA_INPUTS_RADIO_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=624-23642",
      "<FIGMA_INPUTS_SEARCH>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-14989",
      "<FIGMA_INPUTS_SELECT_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2336",
      "<FIGMA_INPUTS_SLIDER_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=589-17676",
      "<FIGMA_INPUTS_SWITCH_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1902",
      "<FIGMA_INPUTS_TEXTAREA_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762-3088",
      "<FIGMA_MENU_MENU_HEADER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:728",
      "<FIGMA_MENU_MENU_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:760",
      "<FIGMA_MENU_MENU_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:743",
      "<FIGMA_MENU_MENU_SEPARATOR>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:731",
      "<FIGMA_MENU_MENU_SHORTCUT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:739",
      "<FIGMA_MENU_MENU>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:720",
      "<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=524-503",
      "<FIGMA_NAVIGATION_NAVIGATION_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=515-5459",
      "<FIGMA_NAVIGATION_NAVIGATION_PILL_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2194-14984",
      "<FIGMA_NAVIGATION_NAVIGATION_PILL>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7768-19970",
      "<FIGMA_NOTIFICATION_NOTIFICATION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=124-8256",
      "<FIGMA_PAGINATION_PAGINATION_GAP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:868",
      "<FIGMA_PAGINATION_PAGINATION_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:903",
      "<FIGMA_PAGINATION_PAGINATION_NEXT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:870",
      "<FIGMA_PAGINATION_PAGINATION_PAGE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:890",
      "<FIGMA_PAGINATION_PAGINATION_PREVIOUS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:880",
      "<FIGMA_PAGINATION_PAGINATION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:899",
      "<FIGMA_SECTIONS_CARD_GRID_CONTENT_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:13407",
      "<FIGMA_SECTIONS_CARD_GRID_ICON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:13221",
      "<FIGMA_SECTIONS_CARD_GRID_IMAGE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:14431",
      "<FIGMA_SECTIONS_CARD_GRID_PRICING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:14983",
      "<FIGMA_SECTIONS_CARD_GRID_REVIEWS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:15213",
      "<FIGMA_SECTIONS_CARD_GRID_TESTIMONIALS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:13347",
      "<FIGMA_SECTIONS_FOOTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=321-11357",
      "<FIGMA_SECTIONS_HEADER_AUTH>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=18-9389",
      "<FIGMA_SECTIONS_HEADER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2287-22651",
      "<FIGMA_SECTIONS_HERO_ACTIONS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15901",
      "<FIGMA_SECTIONS_HERO_BASIC>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15896",
      "<FIGMA_SECTIONS_HERO_FORM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15933",
      "<FIGMA_SECTIONS_HERO_IMAGE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15970",
      "<FIGMA_SECTIONS_HERO_NEWSLETTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15919",
      "<FIGMA_SECTIONS_PAGE_ACCORDION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:13173",
      "<FIGMA_SECTIONS_PAGE_NEWSLETTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:15133",
      "<FIGMA_SECTIONS_PAGE_PRODUCT_RESULTS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:13517",
      "<FIGMA_SECTIONS_PAGE_PRODUCT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348:15147",
      "<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT_REVERSE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15101",
      "<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-13474",
      "<FIGMA_SECTIONS_PANEL_IMAGE_DOUBLE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-13470",
      "<FIGMA_SECTIONS_PANEL_IMAGE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=348-15098",
      "<FIGMA_TABS_TAB>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=3729-12963",
      "<FIGMA_TABS_TABS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=3729-13362",
      "<FIGMA_TAGS_TAG_TOGGLE_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=157-10352",
      "<FIGMA_TAGS_TAG_TOGGLE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=157-10316",
      "<FIGMA_TAGS_TAG>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=56-8830",
      "<FIGMA_TEXT_TEXT_CODE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2104-22325",
      "<FIGMA_TEXT_TEXT_CONTENT_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2153-7834",
      "<FIGMA_TEXT_TEXT_CONTENT_TITLE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2153-7838",
      "<FIGMA_TEXT_TEXT_EMPHASIS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8485",
      "<FIGMA_TEXT_TEXT_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8488",
      "<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2153-7973",
      "<FIGMA_TEXT_TEXT_LINK_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=322-9321",
      "<FIGMA_TEXT_TEXT_LINK>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8483",
      "<FIGMA_TEXT_TEXT_LIST_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2077-11663",
      "<FIGMA_TEXT_TEXT_LIST>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=480-6149",
      "<FIGMA_TEXT_TEXT_PRICE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=1443-10386",
      "<FIGMA_TEXT_TEXT_SMALL>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8484",
      "<FIGMA_TEXT_TEXT_STRONG>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8486",
      "<FIGMA_TEXT_TEXT_SUBHEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2103-22303",
      "<FIGMA_TEXT_TEXT_SUBTITLE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2103-22298",
      "<FIGMA_TEXT_TEXT_TITLE_HERO>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8491",
      "<FIGMA_TEXT_TEXT_TITLE_PAGE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8490",
      "<FIGMA_TEXT_TEXT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8487",
      "<FIGMA_TOOLTIP_TOOLTIP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=315-32700"
        },
        importPaths: {
          "ui/compositions/**/*": "compositions",
          "ui/icons/*": "icons", 
          "ui/images/*": "images",
          "ui/layout/**/*": "layout",
          "ui/primitives/**/*": "primitives"
        },
        paths: {
          "compositions": ["src/ui/compositions"],
          "hooks": ["src/ui/hooks"],
          "icons": ["src/ui/icons"],
          "images": ["src/ui/images"],
          "layout": ["src/ui/layout"],
          "primitives": ["src/ui/primitives"],
          "providers": ["src/ui/providers"],
          "utils": ["src/ui/utils"]
        }
      }
    };
  }

  /**
   * Process document URLs and create mappings
   */
  processDocumentUrls() {
    const substitutions = this.config.codeConnect.documentUrlSubstitutions;
    
    // Create simplified mappings for common component types
    const mappings = {
      // Buttons
      BUTTON: this.extractUrlFromTemplate(substitutions['<FIGMA_BUTTONS_BUTTON>']),
      ICON_BUTTON: this.extractUrlFromTemplate(substitutions['<FIGMA_BUTTONS_ICON_BUTTON>']),
      
      // Inputs
      INPUT_FIELD: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_INPUT_FIELD>']),
      SEARCH: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_SEARCH>']),
      RADIO_GROUP: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_RADIO_GROUP>']),
      CHECKBOX_GROUP: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_CHECKBOX_GROUP>']),
      SELECT_FIELD: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_SELECT_FIELD>']),
      SWITCH_FIELD: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_SWITCH_FIELD>']),
      SLIDER_FIELD: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_SLIDER_FIELD>']),
      TEXTAREA_FIELD: this.extractUrlFromTemplate(substitutions['<FIGMA_INPUTS_TEXTAREA_FIELD>']),
      
      // Headers and Navigation
      HEADER: this.extractUrlFromTemplate(substitutions['<FIGMA_SECTIONS_HEADER>']),
      HEADER_AUTH: this.extractUrlFromTemplate(substitutions['<FIGMA_SECTIONS_HEADER_AUTH>']),
      NAVIGATION_PILL: this.extractUrlFromTemplate(substitutions['<FIGMA_NAVIGATION_NAVIGATION_PILL>']),
      
      // Cards
      CARD: this.extractUrlFromTemplate(substitutions['<FIGMA_CARDS_CARD>']),
      PRICING_CARD: this.extractUrlFromTemplate(substitutions['<FIGMA_CARDS_PRICING_CARD>']),
      
      // Text
      TEXT: this.extractUrlFromTemplate(substitutions['<FIGMA_TEXT_TEXT>']),
      TEXT_HEADING: this.extractUrlFromTemplate(substitutions['<FIGMA_TEXT_TEXT_HEADING>']),
      
      // Forms
      FORM_CONTACT: this.extractUrlFromTemplate(substitutions['<FIGMA_FORMS_FORM_CONTACT>']),
      FORM_LOGIN: this.extractUrlFromTemplate(substitutions['<FIGMA_FORMS_FORM_LOG_IN>']),
      FORM_REGISTER: this.extractUrlFromTemplate(substitutions['<FIGMA_FORMS_FORM_REGISTER>']),
      FORM_NEWSLETTER: this.extractUrlFromTemplate(substitutions['<FIGMA_FORMS_FORM_NEWSLETTER>']),
      
      // Complex Components
      MENU: this.extractUrlFromTemplate(substitutions['<FIGMA_MENU_MENU>']),
      TABS: this.extractUrlFromTemplate(substitutions['<FIGMA_TABS_TABS>']),
      PAGINATION: this.extractUrlFromTemplate(substitutions['<FIGMA_PAGINATION_PAGINATION>']),
      NOTIFICATION: this.extractUrlFromTemplate(substitutions['<FIGMA_NOTIFICATION_NOTIFICATION>']),
      DIALOG: this.extractUrlFromTemplate(substitutions['<FIGMA_DIALOG_DIALOG>']),
      ACCORDION: this.extractUrlFromTemplate(substitutions['<FIGMA_ACCORDION_ACCORDION>']),
      AVATAR: this.extractUrlFromTemplate(substitutions['<FIGMA_AVATARS_AVATAR>']),
      TAG: this.extractUrlFromTemplate(substitutions['<FIGMA_TAGS_TAG>']),
      TOOLTIP: this.extractUrlFromTemplate(substitutions['<FIGMA_TOOLTIP_TOOLTIP>']),
      
      // Sections
      HERO_BASIC: this.extractUrlFromTemplate(substitutions['<FIGMA_SECTIONS_HERO_BASIC>']),
      HERO_FORM: this.extractUrlFromTemplate(substitutions['<FIGMA_SECTIONS_HERO_FORM>']),
      CARD_GRID_PRICING: this.extractUrlFromTemplate(substitutions['<FIGMA_SECTIONS_CARD_GRID_PRICING>'])
    };
    
    // Store all mappings
    Object.entries(mappings).forEach(([key, url]) => {
      if (url) {
        this.documentUrls.set(key, url);
      }
    });
    
    console.log('📋 Processed document URL mappings:', Array.from(this.documentUrls.keys()));
  }

  /**
   * Extract clean URL from template (remove any template markers)
   */
  extractUrlFromTemplate(templateUrl) {
    if (!templateUrl) return null;
    
    // Clean up the URL and ensure it's a full Figma URL
    let url = templateUrl.toString().trim();
    
    // If it starts with 'https://figma.com', convert to full figma.com URL
    if (url.startsWith('https://figma.com')) {
      url = url.replace('https://figma.com', 'https://www.figma.com');
    }
    
    return url;
  }

  /**
   * Load fallback configuration when main config fails
   */
  loadFallbackConfiguration() {
    console.log('⚠️ Using fallback configuration');
    
    this.config = {
      codeConnect: {
        documentUrlSubstitutions: {},
        importPaths: {
          "ui/compositions/**/*": "compositions",
          "ui/primitives/**/*": "primitives"
        }
      }
    };
    
    // Minimal fallback URLs (using the old format as last resort)
    const fallbackUrls = {
      BUTTON: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22768&t=1b1mSdGJpZ8jMdwb-4",
      INPUT_FIELD: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-24062&t=1b1mSdGJpZ8jMdwb-4",
      HEADER: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22546&t=1b1mSdGJpZ8jMdwb-4"
    };
    
    Object.entries(fallbackUrls).forEach(([key, url]) => {
      this.documentUrls.set(key, url);
    });
    
    this.initialized = true;
  }

  /**
   * Get document URL for a component type
   */
  getDocumentUrl(componentType) {
    if (!this.initialized) {
      console.warn('⚠️ Configuration not initialized, call initialize() first');
      return null;
    }
    
    return this.documentUrls.get(componentType.toString().toUpperCase()) || null;
  }

  /**
   * Get all available component types
   */
  getAvailableComponentTypes() {
    return Array.from(this.documentUrls.keys());
  }

  /**
   * Get import paths configuration
   */
  getImportPaths() {
    return (this.config && this.config.codeConnect && this.config.codeConnect.importPaths) || {};
  }

  /**
   * Get paths configuration
   */
  getPaths() {
    return (this.config && this.config.codeConnect && this.config.codeConnect.paths) || {};
  }

  /**
   * Get component mapping for a given component type
   */
  getComponentMapping(componentType) {
    const url = this.getDocumentUrl(componentType);
    const importPaths = this.getImportPaths();
    const paths = this.getPaths();
    
    return {
      url,
      importPaths,
      paths,
      type: componentType
    };
  }

  /**
   * Check if configuration is properly loaded
   */
  isInitialized() {
    return this.initialized;
  }

  /**
   * Get configuration summary for debugging
   */
  getConfigurationSummary() {
    return {
      initialized: this.initialized,
      componentCount: this.documentUrls.size,
      availableTypes: this.getAvailableComponentTypes(),
      importPaths: Object.keys(this.getImportPaths()),
      paths: Object.keys(this.getPaths())
    };
  }
}

// Create singleton instance
const sdsConfig = new SDSConfigurationManager();

// Export for use in other modules
if (typeof window !== 'undefined') {
  // Browser/Figma plugin environment
  window.configModule = sdsConfig;
  
  // Initialize automatically
  sdsConfig.initialize().then(() => {
    console.log('🎯 SDS Configuration ready for use');
  }).catch(error => {
    console.error('❌ SDS Configuration initialization failed:', error);
  });
} else {
  // Node.js environment
  module.exports = { SDSConfigurationManager, sdsConfig };
}

console.log('📦 SDS Configuration module loaded');