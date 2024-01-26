import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "面试宝典",
      icon: "mingcute:book-line",
      prefix: "guide/",
      children: [
        {
          text: "必学概念",
          icon: "solar:book-outline",
          prefix: "concepts/",
          children: [
            {
              text: "Golang",
              icon: "fa6-brands:golang",
              prefix: "golang/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "计算机网络",
              icon: "zondicons:network",
              prefix: "network/",
              collapsible: true,
              children: "structure"
            },
            {
              text: "数据库",
              icon: "material-symbols:database-outline",
              prefix: "database/",
              collapsible: true,
              children: "structure"
            }
          ]
        },
        {
          text: "面试题",
          icon: "solar:book-outline",
          prefix: "interview/",
          children: [
            {
              text: "Golang",
              icon: "grommet-icons:golang",
              prefix: "golang/basic/",
              collapsible: true,
              children: "structure"
            }
          ]
        },
      ],
    },
  ],
});
