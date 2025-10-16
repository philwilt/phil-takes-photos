import classNames from "classnames";

export const GalleryImage: React.FC<{
  src: string;
  full?: boolean;
}> = ({ src, full }) => {
  const className = classNames("rounded-md object-contain", {
    "h-48": !full,
    "w-96": !full,
    "max-h-[480px]": full,
    "object-contain": true,
  });

  const srcString = (src: string) =>
    src.replace(/<SIZE>/, full ? "full" : "preview");

  return (
    <div className="gallery__item__image flex flex-1">
      <img className={className} src={srcString(src)} alt="Plentiphil logo" />
    </div>
  );
};
