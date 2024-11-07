import { createApp } from "vue";
import mainView from "./mainView.vue";
let app: any = null;
export default () => {
  console.log(app, '3333333')
  if (!app) {
    app = createApp(mainView).mount("#app");
  } else {
  }
};
