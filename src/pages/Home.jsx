import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <div className="h-screen w-full flex flex-col gap-6 items-center justify-center max-w-6xl mx-auto">
        <span className="text-3xl font-bold text-slate-900">Home Page</span>
        <div className=" flex items-center justify-center flex-col gap-2">
          <img src="/vite.svg" alt="LogoVite" className="h-24 aspect-square" />
          <span className="text-lg font-semibold text-slate-900">
            React + Vite
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
