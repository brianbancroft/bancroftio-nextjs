import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Brian Bancroft</title>
        <meta name="description" content="A Quick Bio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-prose mx-auto pb-5 px-4 mb-4">
        <p className="my-2">
          I am a software developer who lives in Ladysmith, BC.{" "}
        </p>

        <p className="my-2">
          While I currently work as a front-end developer, I try to work as
          close to fullstack as is possible. I am proficient with building REST
          APIs and using/modelling data with SQL databases and have some
          proficiency with document databases. For front-end work, I stick as
          close as possible with component-based frameworks such as React,
          Svelte and Vue, though I have had worked with MVC-based frameworks in
          the past including Ember.
        </p>

        <p className="my-2">
          I spent a lot of my energy on frontend testing. I still find it as a
          discipline to be both flimsy and needed as our applications become
          increasingly complex.
        </p>

        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 my-8">
          <div>
            <h2 className="text-xl my-2">Social Media</h2>
            <ul className="list-disc">
              <li>
                <a
                  href="https://www.linkedin.com/in/brianbancroft/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Linkedin
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/brianbancroft"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href=" https://stackoverflow.com/users/5158112/brianbancroft"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Stackoverflow
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/brian.bancroft"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/brian_bancroft"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>

            <h2 className="text-xl my-2">Programming Areas of Interest</h2>
            <ol>
              <li>
                JavaScript/TypeScript{" "}
                <span className="text-sm italic">(2014)</span>
              </li>
              <li>
                Ruby on Rails <span className="text-sm italic">(2016)</span>
              </li>
              <li>
                Python <span className="text-sm italic">(2014)</span>
              </li>
              <li>
                Rust <span className="text-gray-600 italic">(2021)</span>
              </li>
            </ol>
          </div>

          <figure>
            <img
              src="/photos/portrait.webp"
              alt="Portrait of Brian"
              width={300}
              height={450}
              layout="intrinsic"
            />
            <figcaption className="italic">
              Casual winter hike at Heart Lake.
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}
