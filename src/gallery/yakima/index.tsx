import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/philtakesphotos-logo.png";
import Gallery from "../../src/Gallery";
import yakima from "../yakima/yakima.json";

const Page: React.FC = () => {
  const gallery: Gallery = {
    galleryItems: yakima.images,
    title: yakima.title,
  };

  return (
    <div className="mt-10">
      <Link
        href="/"
        className="text-3xl font-large flex flex-row content-center justify-center"
      >
        <Image src={Logo} alt="Phil takes photos logo" width={36} height={36} />
      </Link>
      <Link
        href="/galleries"
        className="underline decoration-dotted underline-offset-8"
      >
        <h1 className="text-3xl font-large flex flex-row mt-6 font-extrabold justify-center">
          Galleries
        </h1>
      </Link>
      <div className="flex flex-col gap-5 p-15 md:gap-8 h-auto grid-flow-col md:grid-flow-row">
        <Gallery galleryItems={gallery.galleryItems} title={gallery.title} />
      </div>
    </div>
  );
};

export default Page;
