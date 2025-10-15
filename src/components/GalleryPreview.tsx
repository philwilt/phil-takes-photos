import React from "react";
import { GalleryItem } from "./GalleryItem";

export interface Gallery {
  galleryItems: GalleryItem[];
  title: string;
}

export const Gallery: React.FC<{
  galleryItems: GalleryItem[];
}> = ({ galleryItems }) => {
  return (
    <div className="gallery">
      {galleryItems.map(({ src, caption }, index) => (
        <GalleryItem src={src} caption={caption} key={index} />
      ))}
    </div>
  );
};

export default Gallery;
