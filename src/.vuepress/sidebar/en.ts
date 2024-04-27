import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Guide",
      icon: "mingcute:book-line",
      prefix: "guide/",
      children: [
        {
          text: "Concepts",
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
              text: "Computer Network",
              icon: "zondicons:network",
              prefix: "network/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Database",
              icon: "material-symbols:database-outline",
              prefix: "database/",
              collapsible: true,
              children: "structure",
            },
          ],
        },
        {
          text: "Interview Questions",
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
          text: "Development Specifications",
          icon: "carbon:rule-draft",
          prefix: "standard/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Dev Tools",
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
          text: "Useful Libraries",
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
          ],
        },
      ],
    },
  ],
});
