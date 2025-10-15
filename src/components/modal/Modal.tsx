import "./Modal.css";
import { GalleryImage } from "../gallery/GalleryImage";
import { type Caption, GalleryCaption } from "../gallery/GalleryCaption";
import { useEffect } from "react";

const Modal: React.FC<{
  src: string;
  caption: Caption;
  handleClose: () => void;
}> = ({ src, caption, handleClose }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [handleClose]);

  return (
    <div className="modal-backdrop max-h-fit">
      <div className="modal">
        <div
          className="pt-2 mr-6 text-lg text-right font-bold dark:text-rose-600 text-rose-600 hover:text-purple-400 dark:text-background mt-2 cursor-pointer"
          onClick={() => handleClose()}
        >
          (X) Close
        </div>

        <div className="gallery__item rounded-md p-4 shadow-lg shadow-black-500/10 items-center justify-items-center">
          <GalleryImage src={src} full />
          <GalleryCaption caption={caption} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
