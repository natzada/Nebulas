import React from "react";

const username = "fulano";

function NewPharm() {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="text-text2 text-2xl">Seja bem vindo(a), <span className="text-text1/90 font-medium">{username}!</span></h2>
      <div className="bg-neutral-300 w-85 h-55 rounded-3xl flex justify-center items-center p-4 m-8 hover:bg-tertiary transition-colors shadow-lg">
        <button className="text-8xl text-center text-white hover:text-white/70">+</button>
      </div>
    </div>
  );
}

export default NewPharm;