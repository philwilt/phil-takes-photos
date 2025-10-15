import Modal from "../modal/Modal";
import React, { useState } from "react";
import { GalleryImage } from "./GalleryImage";
import { type Caption, GalleryCaption } from "./GalleryCaption";

export const GalleryItem: React.FC<{
  src: string;
  caption: Caption;
  link?: boolean;
}> = ({ src, caption, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer gallery__item rounded-md p-4 shadow-lg shadow-black-500/10 transform transition duration-300 hover:scale-105"
      >
        <GalleryImage src={src} />
        <GalleryCaption caption={caption} link={link} />
      </div>

      {showModal && (
        <Modal src={src} caption={caption} handleClose={handleClose} />
      )}
    </>
  );
};
