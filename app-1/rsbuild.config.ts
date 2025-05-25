import { defineConfig, RsbuildConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig((config) => {
  return {
    mode: "development",
    server: {
      port: 3000,
    },
    dev: {
      writeToDisk: true,
      hmr: config.env !== "production",
    },
    resolve: {
      aliasStrategy: "prefer-tsconfig",
    },
    output: {
      cleanDistPath: {
        enable: true,
      },
      minify: false,
    },
    plugins: [
      pluginReact(),
      pluginModuleFederation({
        dts: {
          generateTypes: {
            tsConfigPath: "./tsconfig.json",
            compilerInstance: "tspc",
            deleteTypesFolder: true,
          },
        },
        name: "app1",
        filename: "remoteEntry.js",
        exposes: {
          "./shared": "./src/shared/index.ts",
        },
        remotes: {
          "@app2": "app2@/app-2/remoteEntry.js",
        },
        getPublicPath: "return '/'",
        shared: {
          react: { singleton: true, requiredVersion: "^18.3.1" },
          "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
        },
      }),
    ],
  } satisfies RsbuildConfig;
});
