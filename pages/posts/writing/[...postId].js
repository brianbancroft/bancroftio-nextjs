import React from "react";
import Head from "next/head";

import { getAllPostsByFrontMatter } from "../../../lib/getAllPostsByFrontmatter";
import { getPostBySlug } from "../../../lib/getPostBySlug";

function BlogPost(props) {
  const { metadata, body } = props;

  return (
    <>
      <Head>
        <title>{props?.metadata?.title} - Brian Bancroft</title>
        <meta name="description" content="Blog, CV, Aide Memoire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Blog Post!</div>
    </>
  );
}

export async function getStaticProps(context) {
  const [postId] = context?.params?.postId;

  if (!postId) throw new Error("Unknown path");

  const { frontMatter: metadata, markdownBody: body } = await getPostBySlug(
    "writing",
    postId
  );

  return { props: { metadata, body } };
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
