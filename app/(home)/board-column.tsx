"use client";
import React from "react";

export interface todos {
  id: number;
  todo: string;
}

interface props {
  name: string;
  todos: todos[];
  handleTodoMove: (todo: todos, direction: string) => void;
}

const Column = ({ name, todos, handleTodoMove }: props) => {
  console.log(todos);
  return (
    <div className="w-full overflow-hidden border border-gray-600 py-4">
      <h1 className="text-center text-2xl font-semibold ">{name}</h1>
      <div className="py-2 flex flex-col gap-2 m-2">
        {todos.map((todo) => {
          return (
            <div
              key={todo.todo}
              className="flex justify-between px-2 rounded-lg p-2 bg-gray-200"
            >
              <p className="w-50 overflow-hidden truncate">
                {todo.todo || "todo"}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleTodoMove(todo, "left")}
                  disabled={todo.id == 1}
                  className="bg-black/80 disabled:bg-black/30 disabled:cursor-not-allowed transition-all rounded-lg w-6 h-6 text-white cursor-pointer hover:bg-black"
                >{`<`}</button>
                <button
                  disabled={todo.id == 3}
                  onClick={() => handleTodoMove(todo, "right")}
                  className="bg-black/80 disabled:bg-black/30 disabled:cursor-not-allowed transition-all rounded-lg w-6 h-6 text-white cursor-pointer hover:bg-black"
                >{`>`}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Column;
