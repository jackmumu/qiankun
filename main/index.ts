import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import vueRender from "./render/vueRender";
vueRender();
registerMicroApps([
  {
    name: "vue2",
    entry: "//localhost:3001",
    container: "#container",
    loader: vueRender,
    activeRule: "/vue2",
  },
]);
setDefaultMountApp("/vue2");
start();
