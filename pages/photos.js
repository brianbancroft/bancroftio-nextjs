import Head from "next/head";
import Link from "next/link";

import { getAllPostsByFrontMatter } from "../lib/getAllPostsByFrontmatter";

export default function Home(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>photos - Brian Bancroft</title>
        <meta name="description" content="Photos, captures and other media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-4">
        <ul>
          {posts.map((post) => (
            <Link
              href={`/posts/writing/${post.slug}`}
              key={`${post.frontMatter.title}-${post.frontMatter.date}`}
            >
              <a className="w-full">
                <div className="flex justify-between  max-w-prose px-2 mx-auto">
                  <div className="">{post.frontMatter.title}</div>
                  <div className="">{post.frontMatter.date}</div>
                </div>
              </a>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsByFrontMatter("photos");

  return { props: { posts } };
}
