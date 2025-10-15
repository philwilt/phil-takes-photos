import React from "react";
import { GalleryItem } from "./GalleryItem";

export interface Gallery {
  galleryItems: GalleryItem[];
  title: string;
}

export const Gallery: React.FC<{
  galleryItems: GalleryItem[];
  title: string;
  link?: boolean;
}> = ({ galleryItems, title, link }) => {
  return (
    <>
      <div className="gallery bg-neutral-100 dark:bg-white rounded-sm">
        <h2 className="text-lg font-medium flex flex-row justify-evenly text-neutral-600 pt-6">
          {title}
        </h2>
        {link && (
          <p className="text-xs text-center flex flex-row justify-evenly text-neutral-600 underline decoration-dotted underline-offset-4 decoration-2">
            (click for more...)
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          {galleryItems.map(({ src, caption }, index) => (
            <GalleryItem src={src} caption={caption} key={index} link={link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
