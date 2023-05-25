import { r as react } from './__federation_shared_react.js';
import { a as jsxs, j as jsx } from './jsx-runtime.88f1afc6.js';

const reactLogo = "/assets/react.35ef61ed.svg";

const App$1 = '';

function App() {
  const [count, setCount] = react.exports.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://vitejs.dev",
        target: "_blank",
        children: /* @__PURE__ */ jsx("img", {
          src: "/vite.svg",
          className: "logo",
          alt: "Vite logo"
        })
      }), /* @__PURE__ */ jsx("a", {
        href: "https://reactjs.org",
        target: "_blank",
        children: /* @__PURE__ */ jsx("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo"
        })
      })]
    }), /* @__PURE__ */ jsx("h1", {
      children: "Vite + MFE Remote"
    }), /* @__PURE__ */ jsxs("div", {
      className: "card",
      children: [/* @__PURE__ */ jsxs("button", {
        onClick: () => setCount((count2) => count2 + 1),
        children: ["count is ", count]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Edit ", /* @__PURE__ */ jsx("code", {
          children: "src/App.tsx"
        }), " and save to test HMR"]
      })]
    }), /* @__PURE__ */ jsx("p", {
      className: "read-the-docs",
      children: "Click on the Vite and React logos to learn more"
    })]
  });
}

export { App as default };
//# sourceMappingURL=__federation_expose_App.3400f4b7.js.map
