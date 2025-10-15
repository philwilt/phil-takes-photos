import "./Modal.css";
import { GalleryImage } from "../gallery/GalleryImage";
import { type Caption, GalleryCaption } from "../gallery/GalleryCaption";

const Modal = ({ src, caption, handleClose }) => {
  return (
    <div className="modal-backdrop max-h-fit">
      <div className="modal">
        <>
          <div className="gallery__item rounded-md p-4 shadow-lg shadow-black-500/10 items-center justify-items-center">
            <GalleryImage src={src} full />
            <GalleryCaption caption={caption} />
            <span
              className="mt-4 text-lg text-center font-bold dark:text-rose-600 text-rose-600 hover:text-purple-400 dark:text-background mt-2 cursor-pointer"
              onClick={() => handleClose()}
            >
              (X) Close
            </span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
