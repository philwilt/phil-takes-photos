import React from "react";
import { Link } from "react-router-dom";
import Logo from "/philtakesphotos-logo.png";

const GalleryHeader: React.FC = () => {
  return (
    <div className="mt-10 mb-3">
      <Link
        to="/"
        className="text-3xl font-large flex flex-row content-center justify-center"
      >
        <img src={Logo} alt="Phil takes photos logo" width={36} height={36} />
      </Link>
      <Link
        to="/galleries"
        className="underline decoration-dotted underline-offset-8"
      >
        <h1 className="text-3xl font-large flex flex-row mt-6 font-extrabold justify-center">
          Galleries
        </h1>
      </Link>
    </div>
  );
};

export default GalleryHeader;
