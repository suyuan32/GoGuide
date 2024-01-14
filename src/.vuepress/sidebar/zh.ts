import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "面试宝典",
      icon: "mingcute:book-line",
      prefix: "guide/",
      children: [
        {
          text: "Golang",
          icon: "grommet-icons:golang",
          prefix: "basic/",
          children: "structure"
        }
      ],
    },
  ],
});
