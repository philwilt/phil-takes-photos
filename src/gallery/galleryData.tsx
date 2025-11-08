import { type GalleryData } from "./galleryDataTypes";
import pnw from "./pnw/pnw";
import vietnam from "./vietnam/vietnam";
import patagonia from "./patagonia/patagonia";
import europe from "./europe/europe";
import chicago from "./chicago/chicago";
import taipei from "./taipei/taipei";
import seattle from "./seattle/seattle";
import texas from "./texas/texas";

export const GALLERY_BASE_URL = "https://d38881i5te6f0.cloudfront.net";

export type GalleryDictionary = {
  [index: string]: GalleryData;
};

const galleries: GalleryDictionary = {
  pnw: pnw,
  vietnam: vietnam,
  taipei: taipei,
  patagonia: patagonia,
  europe: europe,
  texas: texas,
  chicago: chicago,
  seattle: seattle,
};

/**
 * Retrieve gallery data by name.
 * @param galleryName - The route name of the gallery.
 * @returns The gallery data object.
 */
const getGalleryData = (galleryName: string): GalleryData => {
  return galleries[galleryName];
};

export default getGalleryData;
