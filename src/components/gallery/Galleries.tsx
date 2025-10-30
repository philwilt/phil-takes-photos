import React from "react";
import Logo from "/philtakesphotos-logo.png";
import Gallery from "./Gallery";

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
      <a
        href="/"
        className="text-3xl font-large flex flex-row content-center justify-center"
      >
        <img src={Logo} alt="Phil takes photos logo" width={36} height={36} />
      </a>
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
