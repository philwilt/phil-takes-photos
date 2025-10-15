import React from "react";
import { GalleryImage } from "./GalleryImage";
import { type Caption, GalleryCaption } from "./GalleryCaption";

export interface GalleryItem {
  src: string;
  caption: Caption;
}

export const GalleryItem: React.FC<{
  src: string;
  caption: Caption;
  link?: boolean;
}> = ({ src, caption, link }) => {
  return (
    <div className="gallery__item rounded-md p-4 shadow-lg shadow-black-500/10">
      <GalleryImage src={src} />
      <GalleryCaption caption={caption} link={link} />
    </div>
  );
};
