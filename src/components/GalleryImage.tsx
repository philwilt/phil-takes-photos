import Image from "next/image";

export interface GalleryImage {
  src: string;
}

export const GalleryImage: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    <div className="gallery__item__image">
      <Image
        className="rounded-md object-contain h-48 w-96"
        src={src}
        alt="Plentiphil logo"
        width={180}
        height={38}
      />
    </div>
  );
};
