// vite.config.ts
import { defineConfig } from "file:///home/projects/vite-plugin-federation-shared-libs-problems-hierarchy/node_modules/vite/dist/node/index.js";
import react from "file:///home/projects/vite-plugin-federation-shared-libs-problems-hierarchy/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///home/projects/vite-plugin-federation-shared-libs-problems-hierarchy/node_modules/@originjs/vite-plugin-federation/dist/index.js";
import tsconfigPaths from "file:///home/projects/vite-plugin-federation-shared-libs-problems-hierarchy/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "vite-mfe-host",
  private: true,
  version: "0.0.0",
  type: "module",
  workspaces: ["vite-mfe-m1"],
  scripts: {
    vite: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    "tsc:watch": "tsc -w",
    "build:watch": "vite build --watch",
    "dev:host": "npm-run-all --parallel preview build:watch tsc:watch",
    "dev:remote": "yarn workspaces run dev",
    dev: "npm-run-all --parallel dev:host dev:remote"
  },
  dependencies: {
    react: "^17.0.2",
    "react-dom": "^17.0.2"
  },
  devDependencies: {
    "@originjs/vite-plugin-federation": "^1.1.9",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.2",
    "@vitejs/plugin-react": "^2.1.0",
    "npm-run-all": "^4.1.5",
    typescript: "^4.6.4",
    vite: "^3.1.4",
    "vite-tsconfig-paths": "^3.5.0"
  }
};

// vite.config.ts
var federationPluginOpt = {
  name: "host-app",
  remotes: {
    mf1: "http://localhost:5002/assets/remoteEntry.js",
    from: "vite"
  },
  shared: {
    ...Object.entries(package_default.dependencies).reduce((acc, [key, version]) => {
      acc[key] = {
        requiredVersion: version
      };
      return acc;
    }, {})
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), federation(federationPluginOpt)],
  server: {
    host: true,
    port: 5001
  },
  preview: {
    port: 5001
  },
  build: {
    sourcemap: true,
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0cy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uLXNoYXJlZC1saWJzLXByb2JsZW1zLWhpZXJhcmNoeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdHMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi1zaGFyZWQtbGlicy1wcm9ibGVtcy1oaWVyYXJjaHkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdHMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi1zaGFyZWQtbGlicy1wcm9ibGVtcy1oaWVyYXJjaHkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuY29uc3QgZmVkZXJhdGlvblBsdWdpbk9wdCA9IHtcbiAgbmFtZTogJ2hvc3QtYXBwJyxcblxuICByZW1vdGVzOiB7XG4gICAgbWYxOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAyL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsXG4gICAgLy8gbWYxOiAnaHR0cHM6Ly92aXRlLXBsdWdpbi1mZWRlcmF0aW9uLXNoYXJlZC1saWJzLXByb2JsZW1zLXJlbW90ZS0tNTAwMi5sb2NhbC53ZWJjb250YWluZXIuaW8vYXNzZXRzL3JlbW90ZUVudHJ5LmpzJyxcbiAgICBmcm9tOiAndml0ZScsXG4gIH0sXG4gIHNoYXJlZDoge1xuICAgIC4uLig8YW55Pk9iamVjdCkuZW50cmllcyhwa2cuZGVwZW5kZW5jaWVzKS5yZWR1Y2UoKGFjYywgW2tleSwgdmVyc2lvbl0pID0+IHtcbiAgICAgIGFjY1trZXldID0ge1xuICAgICAgICByZXF1aXJlZFZlcnNpb246IHZlcnNpb24sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gIH0sXG4gIC8vIHJlYWN0OiB7IHNpbmdsZXRvbjogdHJ1ZSB9LCBcInJlYWN0LWRvbVwiOiB7IHNpbmdsZXRvbjogdHJ1ZSB9IH0sXG59O1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0c2NvbmZpZ1BhdGhzKCksIGZlZGVyYXRpb24oZmVkZXJhdGlvblBsdWdpbk9wdCldLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDUwMDEsXG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiA1MDAxLFxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4WCxTQUFTLG9CQUFvQjtBQUMzWixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNLHNCQUFzQjtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUVMLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixHQUFTLE9BQVEsUUFBUSxnQkFBSSxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sTUFBTTtBQUN6RSxVQUFJLE9BQU87QUFBQSxRQUNULGlCQUFpQjtBQUFBLE1BQ25CO0FBQ0EsYUFBTztBQUFBLElBQ1QsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUNQO0FBRUY7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxXQUFXLG1CQUFtQixDQUFDO0FBQUEsRUFDbkUsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
