import React from "react";
import Header from "./(home)/header";
import Board from "./(home)/board";

const page = () => {
  return (
    <div className="bg-white text-black h-screen w-screen overflow-y-scroll">
      <Header />
      <Board />
    </div>
  );
};

export default page;
