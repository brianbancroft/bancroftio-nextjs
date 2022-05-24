import React from "react";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getAllPostsByFrontMatter } from "../../../lib/getAllPostsByFrontmatter";
import { getPostBySlug } from "../../../lib/getPostBySlug";

function BlogPost(props) {
  const { metadata, source, loaded } = props;

  if (!props.loaded) return <>loading</>;

  const components = {};

  return (
    <>
      <Head>
        <title>{props?.metadata?.title} - Brian Bancroft</title>
        <meta name="description" content="Blog, CV, Aide Memoire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="prose p-4">
        <MDXRemote {...source} components={components} />
      </article>
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

  const source = await serialize(body);

  return { props: { metadata, source, loaded: true } };
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
