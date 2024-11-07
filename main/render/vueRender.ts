import { createApp } from "vue";
import mainView from "./mainView.vue";
let app: any = null;
export default () => {
  if (!app) {
    app = createApp(mainView).mount("#app");
  } else {
  }
};
