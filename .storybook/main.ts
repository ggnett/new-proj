import type { StorybookConfig } from "@storybook/react-webpack5";
import { webpack } from "webpack";
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const cssModules = require('./cssModules');

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-styling-webpack",
    // 'storybook-css-modules-preset',
    // "storybook-css-modules",
  ],
  


  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },  
  webpackFinal: cssModules(),
  
};