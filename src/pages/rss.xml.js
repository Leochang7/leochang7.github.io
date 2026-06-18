import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Leo Chang",
    description: "个人博客与知识记录",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
