import React from "react";
import Link from "next/link";
import { getAllPostsByFrontMatter } from "../lib/getAllPostsByFrontmatter";

const SampleIcon = () => (
  <div className="relative z-30 bg-gray-700/50 justify-end flex py-2 pr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  </div>
);

const ProjectIcon = () => (
  <div className="relative z-30 bg-gray-700/50 justify-end flex py-2 pr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  </div>
);

function SnippetsPage(props) {
  const { snippets } = props;

  return (
    <section className=" max-w-prose">
      <div className="grid grid-cols-2 gap-2">
        {snippets.map(({ frontMatter: { title, image, type }, slug }) => (
          <Link href={`/snippets/${slug}`} key={slug}>
            <a className="border border-slate-800">
              <figure className="">
                <div className="h-0">
                  {type === "project" ? <ProjectIcon /> : <SampleIcon />}
                </div>

                {/* next/image does not support ssg well */}
                <img // eslint-disable-line
                  src={image}
                  className="w-full"
                />
                <figcaption className="pl-1">{title}</figcaption>
              </figure>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const snippets = await getAllPostsByFrontMatter("snippets");

  return { props: { snippets } };
}

export default SnippetsPage;
