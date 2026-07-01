import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/notes/",
  lang: "zh-CN",
  title: "Leo Chang 笔记",
  description: "Agent、RAG、LLM 八股和 LangChain 学习笔记",
  outDir: "../dist/notes",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/.obsidian/**"],
      },
    },
  },
  themeConfig: {
    siteTitle: "Leo Chang 笔记",
    nav: [
      { text: "总览", link: "/" },
      { text: "返回博客", link: "https://leochang7.github.io/" },
    ],
    sidebar: [
      {
        text: "AI 笔记",
        items: [
          { text: "总览", link: "/" },
          { text: "Agent", link: "/topics/agent/" },
          { text: "RAG", link: "/topics/rag/" },
          { text: "LLM 八股", link: "/topics/llm-interview/" },
          { text: "LangChain", link: "/topics/langchain/" },
        ],
      },
      {
        text: "扩展",
        collapsed: true,
        items: [
          { text: "数学", link: "/topics/math/" },
          { text: "计算机基础", link: "/topics/cs/" },
          { text: "收件箱", link: "/inbox/" },
          { text: "阅读记录", link: "/reading/" },
          { text: "附件", link: "/attachments/" },
        ],
      },
    ],
    outline: {
      label: "本页目录",
      level: [2, 3],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                noResultsText: "没有找到结果",
                resetButtonTitle: "清除搜索",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
  },
});
