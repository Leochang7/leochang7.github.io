import { getCollection } from "astro:content";

export type BlogPost = Awaited<ReturnType<typeof getPublishedPosts>>[number];

export function getPostSlug(id: string) {
  return id.replace(/\.(md|mdx)$/, "");
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts
    .map((post) => ({
      ...post,
      slug: getPostSlug(post.id),
    }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getTagGroups() {
  const posts = await getPublishedPosts();
  const groups = new Map<string, BlogPost[]>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      const list = groups.get(tag) ?? [];
      list.push(post);
      groups.set(tag, list);
    });
  });

  return Array.from(groups.entries())
    .map(([tag, taggedPosts]) => ({ tag, posts: taggedPosts }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "zh-CN"));
}
