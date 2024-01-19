// @ts-check
const { dependencies } = require("./package.json");

/**
 * @typedef {ConstructorParameters<typeof import("webpack").container.ModuleFederationPlugin>[0]} ModuleFederationPluginOptions
 */
// 

/**
 * @type {(flavor: "unversioned" | "versioned") => ModuleFederationPluginOptions}
 */
module.exports = (_flavor) => {
  return {
    name: "Consumer Base",
    remotes: {}
  }
};
