import { type GalleryData } from "../galleryDataTypes";
import { GALLERY_BASE_URL } from "../galleryData";
const taipei: GalleryData = {
  title: "Taipei",
  routeName: "taipei",
  images: [
    {
      caption: {
        short: "Taipei 101",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-4-<SIZE>.jpg`,
      tags: ["urban", "cityscape"],
    },
    {
      caption: {
        short: "Fish",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-6-<SIZE>.jpg`,
      tags: ["urban"],
    },
    {
      caption: {
        short: "Streets at Night",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-7-<SIZE>.jpg`,
      tags: ["urban", "cityscape"],
    },
    {
      caption: {
        short: "Taipei 101",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-3-<SIZE>.jpg`,
      tags: ["urban", "cityscape"],
    },

    {
      caption: {
        short: "Typhoon City",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-8-<SIZE>.jpg`,
      tags: ["urban", "cityscape"],
    },
    {
      caption: {
        short: "Buns",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-2-<SIZE>.jpg`,
      tags: ["urban"],
    },
    {
      caption: {
        short: "Noodles",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-5-<SIZE>.jpg`,
      tags: ["urban", "food"],
    },
    {
      caption: {
        short: "Meat",
        location: "https://maps.app.goo.gl/fMXHyq6v4FVWUgT37",
      },
      src: `${GALLERY_BASE_URL}/taipei/taipei-1-<SIZE>.jpg`,
      tags: ["urban", "food"],
    },
  ],
};

export default taipei;
