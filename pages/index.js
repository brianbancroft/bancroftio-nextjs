import Head from "next/head";
import Link from "next/link";

import { getAllPostsByFrontMatter } from "../lib/getAllPostsByFrontmatter";

export default function Home(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Brian Bancroft</title>
        <meta name="description" content="Blog, CV, Aide Memoire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-2 mb-4 mt-4 md:mt-1">
        <ul>
          {posts.map((post) => (
            <Link
              href={`/writing/${post.slug}`}
              key={`${post.frontMatter.title}-${post.frontMatter.date}`}
            >
              <a className="w-full">
                <div className="flex justify-between  max-w-prose px-2 mx-auto mb-2">
                  <div className="">{post.frontMatter.title}</div>
                  <div className="italic text-slate-600">
                    {post.frontMatter.date}
                  </div>
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
  const posts = await getAllPostsByFrontMatter("writing");

  return { props: { posts } };
}
