import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "指南",
    icon: "icon-park-outline:mountain",
    link: "/guide/README.md"
  },
  {
    text: "分布式框架",
    icon: "fa6-solid:circle-nodes",
    link: "https://doc.ryansu.tech/zh/"
  },
]);
