import { type GalleryData } from "../galleryDataTypes";
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
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/yakima/seattle-<SIZE>.jpg",
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
    {
      caption: {
        short: "Seattle Skyline Flyby",
        technical: "Long exposure",
        location: "https://maps.app.goo.gl/kw8rdEQBX1X4x1L7A",
      },
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/yakima/seattle-1-<SIZE>.jpg",
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
    {
      caption: {
        short: "Olympics Hawks",
        technical: "Long exposure",
        location: "https://maps.app.goo.gl/kw8rdEQBX1X4x1L7A",
      },
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/yakima/seahawks-1-<SIZE>.jpg",
      tags: ["long exposure", "urban", "cityscape", "nature"],
    },
  ],
};

export default seattle;
