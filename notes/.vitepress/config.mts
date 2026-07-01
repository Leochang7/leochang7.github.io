import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  teekHome: false,
  vpHome: false,
  pageStyle: "segment-nav",
  themeSize: "wide",
  sidebarTrigger: true,
  anchorScroll: true,
  backTop: {
    enabled: true,
    content: "progress",
  },
  breadcrumb: {
    enabled: true,
    showCurrentName: true,
    separator: "/",
  },
  codeBlock: {
    enabled: true,
    collapseHeight: 700,
  },
  articleAnalyze: {
    dateFormat: "yyyy-MM-dd",
    dateUTC: false,
  },
  themeEnhance: {
    enabled: true,
    position: "top",
    layoutSwitch: {
      defaultMode: "original",
      defaultDocMaxWidth: 88,
      defaultPageMaxWidth: 94,
    },
    themeColor: {
      defaultColorName: "vp-primary",
      defaultSpread: false,
    },
    spotlight: {
      defaultValue: false,
      defaultStyle: "aside",
    },
  },
  footerInfo: {
    topMessage: "Leo Chang 笔记",
    theme: {
      show: true,
    },
    copyright: {
      show: true,
      createYear: 2026,
      suffix: "Leo Chang",
    },
  },
  vitePlugins: {
    sidebar: false,
  },
});

export default defineConfig({
  base: "/notes/",
  lang: "zh-CN",
  title: "Leo Chang 笔记",
  description: "Agent、RAG、LLM 八股和 LangChain 学习笔记",
  outDir: "../dist/notes",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: teekConfig.ignoreDeadLinks,
  metaChunk: teekConfig.metaChunk,
  head: teekConfig.head,
  markdown: {
    ...teekConfig.markdown,
    math: true,
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    ...teekConfig.vite,
    server: {
      watch: {
        ignored: ["**/.obsidian/**"],
      },
    },
  },
  themeConfig: {
    ...teekConfig.themeConfig,
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
