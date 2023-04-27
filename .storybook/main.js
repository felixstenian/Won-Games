module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/components/**/stories.@(js|jsx|ts|tsx)"],
  staticDirs: ['../public'],
  "addons": ["@storybook/addon-essentials"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
