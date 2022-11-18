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

      <main className="max-w-prose px-2 mx-auto grid grid-cols-3 gap-1">
        {posts.map((post) => (
          <Link
            href={`/photos/${post.slug}`}
            key={`${post.frontMatter.title}-${post.frontMatter.date}`}
          >
            <a className="">
              <div className="">
                <img
                  src={`/${post.frontMatter.file}`}
                  width="200"
                  height="200"
                  alt={post.frontMatter.title}
                  layout="intrinsic"
                />
              </div>
            </a>
          </Link>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsByFrontMatter("photos");

  return { props: { posts } };
}
