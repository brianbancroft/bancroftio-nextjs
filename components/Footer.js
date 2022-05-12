import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <Link href="/">
          <a>write</a>
        </Link>
        <Link href="/photos">
          <a>photos</a>
        </Link>
        <Link href="/snippets">
          <a>snippets</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
