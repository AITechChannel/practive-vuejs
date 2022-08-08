import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import store from "./store/store.js";
import "@formkit/themes/genesis";

import "./scss/index.scss";

import { createI18n } from "vue-i18n";
// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  en: {
    message: {
      hello: "hello world {msg}",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

const datetimeFormats = {
  "en-US": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    },
  },
  "ja-JP": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  },
};

// 2. Create i18n instance with options
const i18n = createI18n({
  datetimeFormats,
  locale: "en", // set locale
  fallbackLocale: "ja", // set fallback locale
  messages, // set locale messages
  //   // If you need to specify other options, you can set other options
  // ...
});

export const app = createApp(App);

// // 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n);

// 5. Mount

// Now the app has started!

app.use(router);

app.use(store);

app.use(plugin, defaultConfig);

app.mount("#app");
