import React from "react";
import Logo from "/philtakesphotos-logo.png";
import Gallery from "./Gallery";
import ThemeToggle from "../ThemeToggle";

const Galleries: React.FC = () => {
  const galleries = [
    "pnw",
    "vietnam",
    "taipei",
    "europe",
    "patagonia",
    "seattle",
    "chicago",
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <a
          href="/"
          className="text-3xl font-large flex flex-row content-center"
        >
          <img src={Logo} alt="Phil takes photos logo" width={36} height={36} />
        </a>
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-large flex flex-row mt-6 font-extrabold justify-center">
        Galleries
      </h1>

      <div className="flex flex-col gap-5 p-4 md:gap-6 h-auto grid-flow-col md:grid-flow-row">
        {galleries.map((gallery, index) => (
          <Gallery galleryName={gallery} key={index} link />
        ))}
      </div>
    </div>
  );
};

export default Galleries;
