import classNames from "classnames";
export interface GalleryImage {
  src: string;
  full?: boolean;
}

export const GalleryImage: React.FC<{
  src: string;
  full?: boolean;
}> = ({ src, full }) => {
  const className = classNames("rounded-md object-contain", {
    "h-48": !full,
    "w-96": !full,
    "max-h-[600px]": full,
    "object-contain": true,
    // "gallery__item__image-modal": full,
  });

  return (
    <div className="gallery__item__image flex flex-1">
      <img className={className} src={src} alt="Plentiphil logo" />
    </div>
  );
};
