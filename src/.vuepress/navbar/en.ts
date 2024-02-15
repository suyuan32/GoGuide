import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Guide",
    icon: "icon-park-outline:mountain",
    link: "/en/guide/README.md"
  },
  {
    text: "Distributed Framework",
    icon: "fa6-solid:circle-nodes",
    link: "https://doc.ryansu.tech/zh/"
  },
]);
