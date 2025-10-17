import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Import directly from @sds/ui-react package
        compositions: "@sds/ui-react/src/compositions",
        hooks: "@sds/ui-react/src/hooks",
        icons: "@sds/ui-react/src/icons", 
        images: "@sds/ui-react/src/images",
        layout: "@sds/ui-react/src/layout",
        primitives: "@sds/ui-react/src/primitives",
        providers: "@sds/ui-react/src/providers",
        utils: "@sds/ui-react/src/utils",
        data: "@sds/ui-react/src/data",
      };
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
