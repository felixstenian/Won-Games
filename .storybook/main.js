module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/components/**/stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-essentials"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};