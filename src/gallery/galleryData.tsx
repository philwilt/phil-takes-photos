import { type GalleryData } from "./galleryDataTypes";
import yakima from "./yakima/yakima";
import patagonia from "./patagonia/patagonia";

const galleries = {
  yakima: yakima,
  patagonia: patagonia,
};

type GalleryName = {
  yakima: "yakima";
  patagonia: "patagonia";
};

const getGalleryData = (galleryName: keyof typeof GalleryName): GalleryData => {
  return galleries[galleryName];
};

export default getGalleryData;
