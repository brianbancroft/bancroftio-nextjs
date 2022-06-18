import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getAllPostsByFrontMatter(subject) {
  const files = fs.readdirSync(path.join(root, "posts", subject));

  const isMdx = (fileName) => /\.mdx$/.test(fileName);

  // @ts-ignore
  const reducedFiles = files.filter(isMdx).reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "posts", subject, postSlug),
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

  const sortDates = function (a, b) {
    var aa = a.frontMatter.date.split("-").reverse().join(),
      bb = b.frontMatter.date.split("-").reverse().join();
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  };

  const sorted = reducedFiles.sort(sortDates);

  return sorted;
}
