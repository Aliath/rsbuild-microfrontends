// biome-ignore lint/correctness/noNodejsModules: it's a node.js module
import path from 'node:path';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { type RsbuildConfig, defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const BASE_URL = process.env.BASE_URL ?? '/';

// biome-ignore lint/style/noDefaultExport: rsbuild enforces that
export default defineConfig((config) => {
  return {
    mode: config.env === 'production' ? 'production' : 'development',
    server: {
      port: 3000,
      base: BASE_URL,
    },
    dev: {
      writeToDisk: true,
      hmr: config.env !== 'production',
    },
    resolve: {
      aliasStrategy: 'prefer-tsconfig',
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
            tsConfigPath: './tsconfig.json',
            compilerInstance: 'tspc',
            deleteTypesFolder: true,
          },
        },
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './shared': './src/shared/index.ts',
        },
        remotes: {
          '@app2': `app2@${
            config.env === 'development'
              ? 'http://localhost:3001/remoteEntry.js'
              : path.resolve(BASE_URL, './app-2/remoteEntry.js')
          }`,
        },
        getPublicPath: "return './'",
        shared: {
          react: { singleton: true, requiredVersion: '^18.3.1' },
          'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
        },
      }),
    ],
  } satisfies RsbuildConfig;
});
