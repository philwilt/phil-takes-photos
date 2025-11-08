import { type GalleryData } from "../galleryDataTypes";
import { GALLERY_BASE_URL } from "../constants";
const seattle: GalleryData = {
  title: "Seattle",
  routeName: "seattle",
  images: [
    {
      caption: {
        short: "Seattle",
        technical: "Long exposure",
        location: "https://maps.app.goo.gl/kw8rdEQBX1X4x1L7A",
      },
      src: `${GALLERY_BASE_URL}/yakima/seattle-<SIZE>.jpg`,
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
    {
      caption: {
        short: "Seattle Skyline Flyby",
        technical: "Long exposure",
        location: "https://maps.app.goo.gl/kw8rdEQBX1X4x1L7A",
      },
      src: `${GALLERY_BASE_URL}/yakima/seattle-1-<SIZE>.jpg`,
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
    {
      caption: {
        short: "Olympics Hawks",
        technical: "Long exposure",
        location: "https://maps.app.goo.gl/kw8rdEQBX1X4x1L7A",
      },
      src: `${GALLERY_BASE_URL}/yakima/seahawks-1-<SIZE>.jpg`,
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
  ],
};

export default seattle;
