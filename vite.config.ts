import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import pkg from './package.json';
const federationPluginOpt = {
  name: 'host-app',

  remotes: {
    mf1: 'http://localhost:5002/assets/remoteEntry.js',
    // mf1: 'https://vite-plugin-federation-shared-libs-problems-remote--5002.local.webcontainer.io/assets/remoteEntry.js',
    from: 'vite',
  },
  shared: {
    ...(<any>Object).entries(pkg.dependencies).reduce((acc, [key, version]) => {
      acc[key] = {
        requiredVersion: version,
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
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  build: {
    sourcemap: true,
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
