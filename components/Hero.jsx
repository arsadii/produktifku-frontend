import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] flex flex-col justify-center items-center space-y-5 sm:space-y-10">
      <h1 className="sm:text-6xl text-4xl font-bold text-trueGray-600 text-center">
        Atur <span className="text-orange-400 ">Prioritasmu</span>
        <br /> Jaga <span className="text-blue-500"> Produktifmu</span>
      </h1>
      <button className="sm:py-3 py-2 sm:px-20 px-16 bg-gradient-to-b from-blue-200 to-blue-400  text-white font-bold text-xl sm:text-2xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
        Mulai
      </button>
    </div>
  );
}
