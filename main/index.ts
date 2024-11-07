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
  {
    name: "vue3",
    entry: "//localhost:3002",
    container: "#container",
    loader: vueRender,
    activeRule: "/vue3",
  },
  {
    name: "react18",
    entry: "//localhost:3003",
    container: "#container",
    loader: vueRender,
    activeRule: "/react18",
  },
]);
setDefaultMountApp("/vue2");
start();
