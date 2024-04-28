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
              children: "structure",
            },
            {
              text: "数据库",
              icon: "material-symbols:database-outline",
              prefix: "database/",
              collapsible: true,
              children: "structure",
            },
          ],
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
              children: "structure",
            },
          ],
        },
        {
          text: "开发规范",
          icon: "carbon:rule-draft",
          prefix: "standard/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "开发工具",
          icon: "bi:tools",
          prefix: "devtools/",
          collapsible: true,
          children: [
            {
              text: "IDE",
              icon: "dashicons:editor-code",
              prefix: "IDE/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Git",
              icon: "bx:bx-git-branch",
              prefix: "Git/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Docker",
              icon: "mdi:docker",
              prefix: "Docker/",
              collapsible: true,
              children: "structure",
            },
          ],
        },
        {
          text: "常用库",
          icon: "streamline:module-puzzle-1",
          prefix: "library/",
          collapsible: true,
          children: [
            {
              text: "ORM",
              icon: "material-symbols:database-outline",
              prefix: "ORM/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Web框架",
              icon: "streamline:web",
              prefix: "HTTP/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "微服务框架",
              icon: "streamline:web",
              prefix: "Micro/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "工具类库",
              icon: "iconoir:tools",
              prefix: "Util/",
              collapsible: true,
              children: "structure",
            },
          ],
        },
      ],
    },
  ],
});
