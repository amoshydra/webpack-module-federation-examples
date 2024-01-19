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
  const isUnversioned = (_flavor === "unversioned")
  const name = isUnversioned ? '_unversioned' : '_versioned';

  return {
    name: 'Remote' + name,
    filename: "remoteEntry.js",
    exposes: {
      ["./main" + name]: "./src/shared/WidgetPrimary.tsx",
    },
    shared: [
      ...(
        isUnversioned
          ? Object.keys(dependencies)
          : [dependencies]
      ),
      {
        'react': {
          "singleton": true,
          "requiredVersion": dependencies['react'],
        },
        'react-dom': {
          "singleton": true,
          "requiredVersion": dependencies['react-dom'],
        },
      }
    ]
  };
};
