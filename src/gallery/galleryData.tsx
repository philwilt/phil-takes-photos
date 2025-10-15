import { type GalleryData } from "./galleryDataTypes";
import yakima from "./yakima/yakima";
import patagonia from "./patagonia/patagonia";

export type GalleryDictionary = {
  [index: string]: GalleryData;
};

const galleries: GalleryDictionary = {
  yakima: yakima,
  patagonia: patagonia,
};

const getGalleryData = (galleryName: string): GalleryData => {
  return galleries[galleryName];
};

export default getGalleryData;
