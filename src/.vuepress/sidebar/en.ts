import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Guide",
      icon: "mingcute:book-line",
      prefix: "guide/",
      children: [
        {
          text: "Concepts",
          icon: "solar:book-outline",
          prefix: "concepts/",
          children: "structure"
        }, 
        {
          text: "Golang",
          icon: "grommet-icons:golang",
          prefix: "basic/",
          children: "structure"
        },       
      ],
    },
  ],
});
