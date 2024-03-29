import React from "react";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import SyntaxHighlighter from "../../components/SyntaxHighlighter";

import { getAllPostsByFrontMatter } from "../../lib/getAllPostsByFrontmatter";
import { getPostBySlug } from "../../lib/getPostBySlug";

function BlogPost(props) {
  const { metadata, source, loaded } = props;

  if (!props.loaded) return <>loading</>;

  const components = {
    pre: (stuff) => <SyntaxHighlighter {...stuff} />,
  };

  return (
    <>
      <Head>
        <title>{props?.metadata?.title} - Brian Bancroft</title>
        <meta name="description" content="Blog, CV, Aide Memoire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="prose p-4 pb-16 mx-auto">
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const [postId] = context?.params?.postId;

  if (!postId) throw new Error("Unknown path");

  const { frontMatter: metadata, markdownBody: body } = await getPostBySlug(
    "snippets",
    postId
  );

  const source = await serialize(body);

  return { props: { metadata, source, loaded: true } };
}

export async function getStaticPaths() {
  const paths = await (
    await getAllPostsByFrontMatter("snippets")
  ).map((i) => {
    return { params: { postId: [i.slug] } };
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export default BlogPost;
