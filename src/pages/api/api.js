import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const POSTS_PATH = path.join(process.cwd(), "/src/posts");

export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [file, _ext] = fileName.split(".");
    return file;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => a.meta.date - b.meta.date);
  return posts;
};

export const getPostFromSlug = (slug) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      excerpt: data.excerpt,
      date: data.date ? data.date.toString() : new Date().toString(),
      title: data.title ? data.title : slug,
      tags: data.tags ? data.tags.sort() : [],
      slug,
    },
  };
};
