---
pubDatetime: 2026-07-01T15:15:00.000Z
title: 使用 AstroPaper 重建博客
featured: true
draft: false
tags:
  - Astro
  - Blog
description: "博客已切换到 AstroPaper，后续文章会继续放在这个内容系统中维护。"
---

博客已经切换到 AstroPaper。它适合做一个长期维护的个人写作站：文章用 Markdown 或 MDX 管理，页面由 Astro 静态生成，搜索、RSS、标签、归档和明暗主题都已经内置。

![AstroPaper 主题预览](@/assets/images/astropaper-og.jpg)

这篇文章同时作为新站的写作说明和排版样例，用来展示当前主题在中文内容里的标题、段落、表格、提示块和代码块效果。

## Table of contents

## 写作入口

普通文章放在 `src/content/posts/` 下。文件可以是 Markdown，也可以是 MDX：

```bash file="post-paths.sh"
# 示例：文章文件路径和对应用途
src/content/posts/my-note.md                         -> 普通文章
src/content/posts/research/reading-list.md           -> 研究笔记
src/content/posts/experiments/interactive-demo.mdx   -> 交互文章
```

如果只是普通文字、公式、图片、代码块，优先使用 Markdown。只有文章需要嵌入交互组件时再使用 MDX。

> [!TIP]
> 文件名建议使用英文、小写字母和短横线。这样生成的 URL 更稳定，也更适合 GitHub Pages 部署。

## Frontmatter

每篇文章都需要一段 frontmatter。最小格式如下：

```md
---
pubDatetime: 2026-07-01T15:15:00.000Z
title: 文章标题
description: 文章摘要
tags:
  - Blog
draft: false
---
```

如果暂时不想发布，把 `draft` 改成 `true`。

常用字段：

| 字段          | 用途                 | 是否必填 |
| ------------- | -------------------- | -------- |
| `title`       | 文章标题             | 是       |
| `description` | 摘要和 SEO 描述      | 是       |
| `pubDatetime` | 发布时间             | 是       |
| `tags`        | 标签列表             | 否       |
| `featured`    | 是否出现在首页精选区 | 否       |
| `draft`       | 是否草稿             | 否       |

## 提示块

AstroPaper 支持 Obsidian 风格的 callout。它很适合放补充说明、注意事项和阶段性结论。

> [!NOTE]
> 这是一条普通说明。它不会打断正文节奏，但能把重要信息从段落里拎出来。

> [!WARNING]
> 如果文章还没有准备好发布，记得设置 `draft: true`，否则构建时会进入公开页面。

> [!TIP]+ 可以折叠的提示
> 在提示类型后面加 `+` 或 `-`，可以控制 callout 是否默认展开。

## 代码块

代码块由 Shiki 渲染，支持文件名、行高亮和差异标记。后续写技术文章时可以直接使用：

```ts file="src/content/posts/example.ts"
type PostMeta = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
};

export function isPublished(post: PostMeta) {
  return post.draft !== true;
}
```

也可以用 diff 标记突出修改：

```diff file="frontmatter.diff"
--- old.md
+++ new.md
@@
-draft: true
+draft: false
```

## 图片和附件

文章图片推荐放在 `src/assets/`，然后用别名引用：

```md
![图片说明](@/assets/images/example.jpg)
```

如果是 PDF、压缩包或不需要 Astro 优化的静态资源，可以放进 `public/`，再用绝对路径引用。

## 后续整理

这个站点当前已经具备基本写作能力：

- 首页展示精选文章和最近文章。
- `/posts/` 展示全部文章。
- `/tags/` 按标签组织内容。
- `/archives/` 按时间归档。
- `/search/` 使用 Pagefind 做静态搜索。

接下来只需要持续把内容写进去。等文章数量多起来，AstroPaper 的列表、归档、搜索和文章页排版会更接近官方示例站的观感。
