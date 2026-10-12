import React from "react";
import Todo from "../components/todo";
import Link from "next/link";
export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  console.log(posts);
  const postJSX = posts.map((post) => {
    return (
    <Link href={`/posts/${post.id}`}>
        <div
          style={{
            width: "100vw",
            backgroundColor: "teal",
            padding: "10px",
            borderRadius: "15px",
            marginTop: "20px",
            color: "black",
          }}
        >
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>
    </Link >
    );
  });
  return (
    <div>
      <h1>posts page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postJSX}
      </div>
    </div>
  );
}
