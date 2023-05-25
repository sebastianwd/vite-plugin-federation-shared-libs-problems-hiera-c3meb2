import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import pkg from './package.json';

const federationPluginOpt = {
  name: 'mf1',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': 'src/Button.tsx',
    './App': 'src/App.tsx',
  },
  shared: {
    ...(<any>Object).entries(pkg.dependencies).reduce((acc, [key, version]) => {
      acc[key] = {
        version: version,
      };
      return acc;
    }, {}),
  },
  // react: { singleton: true }, "react-dom": { singleton: true } },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), federation(federationPluginOpt)],
  server: {
    host: true,
    port: 5002,
  },
  preview: {
    port: 5002,
  },
  build: {
    minify: false,
    sourcemap: true,
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
