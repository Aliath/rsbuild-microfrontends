import { defineConfig, RsbuildConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import path from "path";

export default defineConfig((config) => {
  return {
    mode: "development",
    server: {
      port: 3001,
      printUrls: false,
      open: false,
    },
    dev: {
      writeToDisk: true,
      hmr: config.env !== "production",
    },
    resolve: {
      aliasStrategy: "prefer-tsconfig",
    },
    output: {
      distPath: {
        root: path.resolve(__dirname, "../app-1/dist/app-2"),
      },
      cleanDistPath: true,
      minify: false,
    },
    plugins: [
      pluginReact(),
      pluginModuleFederation({
        name: "app2",
        filename: "remoteEntry.js",
        dts: {
          generateTypes: {
            tsConfigPath: "./tsconfig.json",
            compilerInstance: "tspc",
            deleteTypesFolder: true,
          },
        },
        exposes: {
          "./shared-app": "./src/shared-app.tsx",
        },
        remotes: {
          "@app1": "app1@/remoteEntry.js",
        },
        getPublicPath: "return '/app-2/'",
        shared: {
          react: { singleton: true, requiredVersion: "^18.3.1" },
          "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
        },
      }),
    ],
  } satisfies RsbuildConfig;
});
