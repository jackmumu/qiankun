import { createApp } from "vue";
import App from "./App.vue";

let instance = null;

function render(props = {}) {
  const { container } = props;
  const instance = createApp(App);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(3);
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.unmount();
    instance.$el.innerHTML = "";
    instance = null;
  }
}
