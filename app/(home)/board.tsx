"use client";
import React, { useState } from "react";
import Column, { todos } from "./board-column";

const Board = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Post on linkedin",
    },
    {
      id: 1,
      todo: "Post on youtube",
    },
    {
      id: 1,
      todo: "Post on website",
    },
    {
      id: 2,
      todo: "Create portfolio",
    },
    {
      id: 2,
      todo: "Crete a video calling website",
    },
    {
      id: 2,
      todo: "Resolve the issue of responsiveness in latest project",
    },
    {
      id: 3,
      todo: "Install wsl in windows",
    },
    {
      id: 3,
      todo: "Instll docker inside linux",
    },
    {
      id: 3,
      todo: "setup full dev env in wsl2",
    },
    {
      id: 3,
      todo: "this is todo for time waste",
    },
  ]);

  const handleTodoMove = (todo: todos, direction: string) => {
    const newTodos = todos.map((item) => {
      if (todo.todo != item.todo) return item;
      const newTodo = todo;
      newTodo.id = direction == "left" ? todo.id - 1 : todo.id + 1;
      return newTodo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="flex w-full max-w-5xl py-12 mx-auto overflow-hidden">
      <Column
        todos={todos.filter((todo) => todo.id == 1)}
        name="Pending"
        handleTodoMove={handleTodoMove}
      />
      <Column
        todos={todos.filter((todo) => todo.id == 2)}
        name="Processing"
        handleTodoMove={handleTodoMove}
      />
      <Column
        todos={todos.filter((todo) => todo.id == 3)}
        name="Completed"
        handleTodoMove={handleTodoMove}
      />
    </div>
  );
};

export default Board;
