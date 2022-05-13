import React from "react";
import { getAllPostsByFrontMatter } from "../../../lib/getAllPostsByFrontmatter";

function BlogPost() {
  return <div>Blog Post!</div>;
}

export async function getStaticProps(context) {
  console.log("Ctx ", context);
  console.log("hello world");

  return { props: {} };
}

export async function getStaticPaths() {
  const postId = await (
    await getAllPostsByFrontMatter("writing")
  ).map((i) => i.slug);

  return {
    paths: [{ params: { postId } }],
    fallback: true, // false or 'blocking'
  };
}

export default BlogPost;
