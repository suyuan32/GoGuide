import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Go Guide",
      description: "Golang guide for interview",
    },
    "/": {
      lang: "zh-CN",
      title: "Go 面试宝典",
      description: "Golang 面试宝典，面试题和基础",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: true,

  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },

  head: [
    [
      "script",
      {
        charset: "UTF-8",
        id: "LA_COLLECT",
        src: "//sdk.51.la/js-sdk-pro.min.js",
      },
    ],
    ["script", {}, `LA.init({id:"KJnPRPv6MxlnxsRB",ck:"KJnPRPv6MxlnxsRB"})`],
  ],
});
