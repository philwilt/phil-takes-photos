import React from "react";
import { Link } from "react-router-dom";
import Logo from "/philtakesphotos-logo.png";
import ThemeToggle from "../ThemeToggle";

const GalleryHeader: React.FC = () => {
  return (
    <div className="mt-10 mb-3">
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/"
          className="text-3xl font-large flex flex-row content-center"
        >
          <img src={Logo} alt="Phil takes photos logo" width={36} height={36} />
        </Link>
        <ThemeToggle />
      </div>
      <Link to="/galleries" className="">
        <h1 className="text-3xl font-large flex flex-row mt-6 mb-8 font-extrabold justify-center underline decoration-dotted underline-offset-8">
          Galleries
        </h1>
      </Link>
    </div>
  );
};

export default GalleryHeader;
