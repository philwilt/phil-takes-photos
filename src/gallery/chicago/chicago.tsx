import { type GalleryData } from "../galleryDataTypes";

const chicago: GalleryData = {
  title: "Chicago",
  routeName: "chicago",
  images: [
    {
      caption: {
        short: "Streets at Night",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/chicago/chicago-1-<SIZE>.png",
      tags: ["urban", "architecture", "cityscape"],
    },
    {
      caption: {
        short: "Empty Bean",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/chicago/chicago-2-<SIZE>.png",
      tags: ["urban", "architecture", "cityscape"],
    },
    {
      caption: {
        short: "Skyline at Night",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: "https://phil-takes-photos-gallery.s3.us-east-1.amazonaws.com/chicago/chicago-3-<SIZE>.png",
      tags: ["urban", "architecture", "cityscape"],
    },
  ],
};

export default chicago;
