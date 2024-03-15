import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import * as VueI18n from "vue-i18n";
import router from "./router";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import { createPinia } from "pinia";
import Ripple from "./directives/ripple";

const app = createApp(App);
const i18n = VueI18n.createI18n({
  // locale: navigator.language.split("-")[1].toLocaleLowerCase(),
  locale: "en",
  messages: {
    en,
    ru,
  },
  // globalInjection: true,
  // legacy: false,
  // pluralRules: {
  //   ru: customRule,
  // },
});

app.directive("ripple", Ripple);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
