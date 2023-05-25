import { j as jsx } from './jsx-runtime.88f1afc6.js';

const style = {
  background: "#a3e077",
  color: "#FFFFFF",
  padding: 12
};
const Button = () => {
  const buttonHandler = () => {
    console.log(import.meta);
    alert("button event");
  };
  return /* @__PURE__ */ jsx("button", {
    className: "remote-btn",
    style,
    onClick: () => buttonHandler(),
    children: "Rollup Remote React Button"
  });
};

export { Button as default };
//# sourceMappingURL=__federation_expose_Button.4a600a5f.js.map
