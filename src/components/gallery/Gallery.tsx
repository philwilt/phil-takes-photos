import React from "react";
import { useParams } from "react-router-dom";

import {
  type GalleryData,
  type GalleryImageData,
} from "../../gallery/galleryDataTypes";

import getGalleryData from "../../gallery/galleryData";
import { GalleryItem } from "./GalleryItem";
import GalleryHeader from "./GalleryHeader";
import { Navigate } from "react-router-dom";

export interface Gallery {
  galleryItems: GalleryImageData[];
  title: string;
  galleryName?: string;
}

export const Gallery: React.FC<{
  link?: boolean;
  galleryName?: string;
}> = ({ link, galleryName }) => {
  const { id } = useParams();
  const galleryId = galleryName ? galleryName : id;

  if (typeof galleryId === "undefined") {
    return <Navigate to="/" replace />;
  }

  const gallery: GalleryData = getGalleryData(galleryId);

  if (!gallery) {
    return <Navigate to="/" replace />;
  }

  const galleryImages = link ? gallery.images.slice(0, 3) : gallery.images;

  return (
    <>
      {!link && <GalleryHeader />}
      <div className="gallery bg-neutral-100 dark:bg-white rounded-sm">
        <h2 className="text-lg font-medium flex flex-row justify-evenly text-neutral-600 pt-6">
          {gallery.title}
        </h2>
        {link && (
          <p className="text-xs text-center flex flex-row justify-evenly underline decoration-dotted underline-offset-4 decoration-2">
            (click for more...)
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          {galleryImages.map(({ src, caption }, index) => (
            <GalleryItem src={src} caption={caption} key={index} link={link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
