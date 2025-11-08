import { type GalleryData } from "../galleryDataTypes";
import { GALLERY_BASE_URL } from "../galleryData";

const europe: GalleryData = {
  title: "Europe",
  routeName: "europe",
  images: [
    {
      caption: {
        short: "Effiel Inside",
        location: "https://maps.app.goo.gl/ofvBYuxbTi4JKBnQ7",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-4-<SIZE>.png`,
      tags: ["architecture", "urban"],
    },
    {
      caption: {
        short: "Effiel & Lamp",
        location: "https://maps.app.goo.gl/ofvBYuxbTi4JKBnQ7",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-6-<SIZE>.png`,
      tags: ["architecture", "urban"],
    },
    {
      caption: {
        short: "Fortress",
        location: "https://maps.app.goo.gl/vDMT6QYY21divaM9A",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-1-<SIZE>.png`,
      tags: ["architecture", "urban"],
    },
    {
      caption: {
        short: "Mort Subite",
        location: "https://maps.app.goo.gl/nPg9VCuk7YNVjrDX8",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-3-<SIZE>.png`,
      tags: ["urban"],
    },
    {
      caption: {
        short: "Effiel Reaching",
        location: "https://maps.app.goo.gl/ofvBYuxbTi4JKBnQ7",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-5-<SIZE>.png`,
      tags: ["architecture", "urban"],
    },
    {
      caption: {
        short: "Belgian Countryside Sunrise",
        location: "https://maps.app.goo.gl/rHibVYKjPF27x2pR9",
      },
      src: `${GALLERY_BASE_URL}/europe/europe-2-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
  ],
};

export default europe;
