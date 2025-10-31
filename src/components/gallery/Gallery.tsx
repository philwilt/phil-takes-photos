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

  // Extract available filters from images based on allowed list
  const availableFilters = useMemo(() => {
    // Define allowed filters
    const allowedFilters = [
      "infrared",
      "850nm",
      "720nm",
      "long exposure",
      "b+w",
      "sepia",
    ];
    if (!gallery) return [];

    const foundFilters = new Set<string>();

    gallery.images.forEach((image) => {
      if (image.caption.technical) {
        const technicalLower = image.caption.technical.toLowerCase();
        allowedFilters.forEach((filter) => {
          // Special handling for infrared filter
          if (filter === "infrared") {
            if (
              technicalLower.includes("720nm") ||
              technicalLower.includes("850nm")
            ) {
              foundFilters.add(filter);
            }
          } else if (technicalLower.includes(filter.toLowerCase())) {
            foundFilters.add(filter);
          }
        });
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
      if (!image.caption.technical) return false;

      const technicalLower = image.caption.technical.toLowerCase();

      return selectedFilters.some((filter) => {
        // Special handling for infrared filter
        if (filter === "infrared") {
          return (
            technicalLower.includes("720nm") || technicalLower.includes("850nm")
          );
        }
        return technicalLower.includes(filter.toLowerCase());
      });
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
