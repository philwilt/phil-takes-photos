import { type GalleryData } from "../galleryDataTypes";
import { GALLERY_BASE_URL } from "../constants";

const chicago: GalleryData = {
  title: "Chicago",
  routeName: "chicago",
  images: [
    {
      caption: {
        short: "Streets at Night",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: `${GALLERY_BASE_URL}/chicago/chicago-1-<SIZE>.png`,
      tags: ["urban", "architecture", "cityscape"],
    },
    {
      caption: {
        short: "Empty Bean",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: `${GALLERY_BASE_URL}/chicago/chicago-2-<SIZE>.png`,
      tags: ["urban", "architecture", "cityscape"],
    },
    {
      caption: {
        short: "Skyline at Night",
        location: "https://maps.app.goo.gl/4q5gcfeQ7WG7tvvQ8",
      },
      src: `${GALLERY_BASE_URL}/chicago/chicago-3-<SIZE>.png`,
      tags: ["urban", "architecture", "cityscape"],
    },
  ],
};

export default chicago;
