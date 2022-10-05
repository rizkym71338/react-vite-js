import React from "react";
import { Link } from "react-router-dom";
import { ButtonBrand } from "../components";

const NotFound = () => {
  return (
    <div className="bg-slate-50">
      <div className="h-screen w-full max-w-6xl mx-auto flex items-center justify-center flex-col gap-6">
        <span className="text-3xl font-bold text-slate-900">
          Page Not Found
        </span>
        <Link to="/">
          <ButtonBrand text="Back To Home" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
