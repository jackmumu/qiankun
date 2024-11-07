import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let root = null;
function render(props) {
  const { container } = props;
  const rootElement = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  if (rootElement) {
    root = createRoot(rootElement);
    root.render(<App />);
  }
}
function storeTest(props) {
  props.onGlobalStateChange(
    (value, prev) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  storeTest(props);
  render(props);
}

export async function unmount(props) {
  root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
