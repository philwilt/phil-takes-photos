import { type GalleryData } from "./galleryDataTypes";
import pnw from "./pnw/pnw";
import vietnam from "./vietnam/vietnam";
import patagonia from "./patagonia/patagonia";
import europe from "./europe/europe";
import chicago from "./chicago/chicago";

export type GalleryDictionary = {
  [index: string]: GalleryData;
};

const galleries: GalleryDictionary = {
  pnw: pnw,
  vietnam: vietnam,
  patagonia: patagonia,
  europe: europe,
  chicago: chicago,
};

const getGalleryData = (galleryName: string): GalleryData => {
  return galleries[galleryName];
};

export default getGalleryData;
