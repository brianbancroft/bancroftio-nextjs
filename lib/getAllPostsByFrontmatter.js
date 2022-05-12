import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getAllPostsByFrontMatter(subject) {
  const files = fs.readdirSync(path.join(root, "pages", "posts", subject));

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "pages", "posts", subject, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
