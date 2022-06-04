import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const { route } = useRouter();

  return (
    <>
      <section className="hidden lg:flex flex-col items-end">
        <Link href="/">
          <a className="text-2xl mb-2 text-gray-400">Brian Bancroft</a>
        </Link>
        <Link href="/">
          <a className={`text-xl py-2 ${route === "/" ? "underline" : ""}`}>
            home
          </a>
        </Link>
        <Link href="/photos">
          <a
            className={`text-xl py-2 ${route === "/photos" ? "underline" : ""}`}
          >
            photos
          </a>
        </Link>
        <Link href="/snippets">
          <a
            className={`text-xl py-2 ${
              route === "/snippets" ? "underline" : ""
            }`}
          >
            snippets
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`text-xl py-2 ${route === "/about" ? "underline" : ""}`}
          >
            about
          </a>
        </Link>
      </section>
    </>
  );
}

export default Footer;
