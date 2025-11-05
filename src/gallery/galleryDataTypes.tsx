export type GalleryCaptionData = {
  short: string;
  location?: string;
  technical?: string;
};

export type GalleryImageData = {
  caption: GalleryCaptionData;
  src: string;
  tags?: string[];
};

export type GalleryData = {
  title: string;
  routeName: string;
  images: GalleryImageData[];
};
