import { type GalleryData } from "../galleryDataTypes";
import { GALLERY_BASE_URL } from "../constants";
const patagonia: GalleryData = {
  title: "Patagonia",
  routeName: "patagonia",
  images: [
    {
      caption: {
        short: "Torres del Paine",
        location: "https://maps.app.goo.gl/N8Zf2i1mEfkKdio8A",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-1-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
    {
      caption: {
        short: "Gaucho on Pingo Salvaje Estancia",
        location: "https://maps.app.goo.gl/t1j6LedZRd27MgUc6",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-2-<SIZE>.png`,
      tags: ["nature", "landscape", "wildlife"],
    },
    {
      caption: {
        short: "Mt Fitz Roy",
        location: "https://maps.app.goo.gl/rKx6uqicmwnPi59X6",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-3-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
    {
      caption: {
        short: "Mt Fitz Roy & Cerro Torre",
        location: "https://maps.app.goo.gl/rKx6uqicmwnPi59X6",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-4-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
    {
      caption: {
        short: "Perito Moreno Wedding Dress",
        location: "https://maps.app.goo.gl/7rErY9f6LPFgNvsR8",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-5-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
    {
      caption: {
        short: "Perito Moreno",
        location: "https://maps.app.goo.gl/7rErY9f6LPFgNvsR8",
      },
      src: `${GALLERY_BASE_URL}/patagonia/patagonia-6-<SIZE>.png`,
      tags: ["nature", "landscape"],
    },
  ],
};

export default patagonia;
