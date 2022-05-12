import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getPostBySlug(dataType, slug) {
  const source = fs.readFileSync(
    path.join(root, "data", dataType, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}
