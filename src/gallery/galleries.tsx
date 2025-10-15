import React from "react";
import Logo from "../../public/philtakesphotos-logo.png";
import Gallery from "../components/Gallery";
import patagonia from "./patagonia/patagonia.json";
import yakima from "./yakima/yakima.json";

const Galleries: React.FC = () => {
  const galleries: Gallery[] = [
    { galleryItems: yakima.images.slice(0, 3), title: yakima.title },
    { galleryItems: patagonia.images.slice(0, 3), title: patagonia.title },
  ];
  return (
    <div className="mt-10">
      <Link
        href="/"
        className="text-3xl font-large flex flex-row content-center justify-center"
      >
        <Image src={Logo} alt="Phil takes photos logo" width={36} height={36} />
      </Link>
      <h1 className="text-3xl font-large flex flex-row mt-6 font-extrabold justify-center">
        Galleries
      </h1>

      <div className="flex flex-col gap-5 p-15 md:gap-8 h-auto grid-flow-col md:grid-flow-row">
        {galleries.map((gallery, index) => (
          <Link
            className="gallery"
            key={index}
            href={`/gallery/${gallery.title.toLowerCase()}`}
          >
            <Gallery
              galleryItems={gallery.galleryItems}
              title={gallery.title}
              link
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
