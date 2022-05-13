import React from "react";

function SnippetPost() {
  return <div>snippet Post!</div>;
}

export default SnippetPost;

export function getStaticProps(ctx) {
  console.log("Ctx ", ctx);

  return { props: {} };
}
