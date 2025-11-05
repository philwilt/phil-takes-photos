import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  type GalleryData,
  type GalleryImageData,
} from "../../gallery/galleryDataTypes";

import getGalleryData from "../../gallery/galleryData";
import { GalleryItem } from "./GalleryItem";
import GalleryHeader from "./GalleryHeader";
import { Navigate } from "react-router-dom";
import FilterBar from "./FilterBar";

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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Get gallery data
  const gallery: GalleryData | undefined =
    typeof galleryId !== "undefined" ? getGalleryData(galleryId) : undefined;

  // Extract available filters from images tags
  const availableFilters = useMemo(() => {
    if (!gallery) return [];

    const foundFilters = new Set<string>();

    gallery.images.forEach((image) => {
      if (image.tags) {
        image.tags.forEach((tag) => foundFilters.add(tag));
      }
    });
    return Array.from(foundFilters).sort();
  }, [gallery]);

  // Filter images based on selected filters
  const filteredImages = useMemo(() => {
    if (!gallery) return [];
    if (selectedFilters.length === 0) {
      return gallery.images;
    }
    return gallery.images.filter((image) => {
      if (!image.tags) return false;

      return selectedFilters.some((filter) => image.tags!.includes(filter));
    });
  }, [gallery, selectedFilters]);

  // Early returns after all hooks
  if (typeof galleryId === "undefined") {
    return <Navigate to="/" replace />;
  }

  if (!gallery) {
    return <Navigate to="/" replace />;
  }

  const galleryImages = link ? gallery.images.slice(0, 3) : filteredImages;

  return (
    <>
      {!link && <GalleryHeader />}
      <div className="gallery bg-neutral-100 dark:bg-white rounded-sm">
        <h2 className="text-lg font-medium flex flex-row justify-evenly text-neutral-600 pt-6">
          {gallery.title}
        </h2>
        {link && (
          <Link
            className="transform transition duration-300 hover:scale-105"
            to={`/gallery/${gallery.routeName}`}
          >
            <p className="text-xs text-center flex flex-row justify-evenly underline decoration-dotted underline-offset-4 decoration-2 transform transition duration-300 hover:scale-110">
              (click for more...)
            </p>
          </Link>
        )}
        {!link && availableFilters.length > 0 && (
          <div className="px-5 pt-4">
            <FilterBar
              availableFilters={availableFilters}
              selectedFilters={selectedFilters}
              onFilterChange={setSelectedFilters}
            />
          </div>
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
