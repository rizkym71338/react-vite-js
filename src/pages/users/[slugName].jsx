import React from "react";
import { useParams } from "react-router-dom";

const SlugName = () => {
  const { slugName } = useParams();

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center h-screen justify-center">
        <span className="text-3xl capitalize font-semibold text-slate-900">
          {slugName.replace(/-/g, " ")}
        </span>
      </div>
    </div>
  );
};

export default SlugName;
