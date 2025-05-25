// biome-ignore lint/correctness/noNodejsModules: why not
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
      port: 3001,
      printUrls: false,
      open: false,
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
      distPath: {
        root: path.resolve(__dirname, '../app-1/dist/app-2'),
      },
      cleanDistPath: true,
      minify: false,
    },
    plugins: [
      pluginReact(),
      pluginModuleFederation({
        name: 'app2',
        filename: 'remoteEntry.js',
        dts: {
          generateTypes: {
            tsConfigPath: './tsconfig.json',
            compilerInstance: 'tspc',
            deleteTypesFolder: true,
          },
        },
        exposes: {
          './shared-app': './src/shared-app.tsx',
        },
        remotes: {
          '@app1': `app1@${path.resolve(BASE_URL, './remoteEntry.js')}`,
        },
        getPublicPath: "return './app-2/'",
        shared: {
          react: { singleton: true, requiredVersion: '^18.3.1' },
          'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
        },
      }),
    ],
  } satisfies RsbuildConfig;
});
