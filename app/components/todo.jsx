"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setTodo(result);
    }

    fetchTodo();
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}