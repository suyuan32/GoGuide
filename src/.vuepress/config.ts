import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Go Guide",
      description: "Golang guide for interview",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Go 面试宝典",
      description: "Golang 面试宝典，面试题和基础",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
