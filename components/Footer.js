import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const { route } = useRouter();

  return (
    <>
      <footer className="absolute bottom-0 w-full ">
        <div className="flex justify-around max-w-prose mx-auto">
          <Link href="/">
            <a className={`text-2xl py-2 ${route === "/" ? "underline" : ""}`}>
              home
            </a>
          </Link>
          <Link href="/photos">
            <a
              className={`text-2xl py-2 ${
                route === "/photos" ? "underline" : ""
              }`}
            >
              photos
            </a>
          </Link>
          <Link href="/snippets">
            <a
              className={`text-2xl py-2 ${
                route === "/snippets" ? "underline" : ""
              }`}
            >
              snippets
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`text-2xl py-2 ${
                route === "/about" ? "underline" : ""
              }`}
            >
              about
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
