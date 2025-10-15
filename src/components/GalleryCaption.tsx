import Link from "next/link";
import Image from "next/image";
import React from "react";

import Pin from "../../public/mappin.svg";

export interface Caption {
  short: string;
  technical?: string;
  location?: string;
}

export interface GalleryCaption {
  caption: Caption;
}

export const GalleryCaption: React.FC<{
  caption: Caption;
  link?: boolean;
}> = ({ caption, link }) => {
  return (
    <>
      <p className="gallery__item__caption text-sm text-center dark:text-background mt-2">
        {caption.short}
      </p>
      {!link && caption.location && (
        <p className="italic gallery__item__caption text-xs text-center dark:text-background mt-0">
          {caption.technical}
        </p>
      )}
      {!link && caption.location && (
        <Link
          target="_blank"
          rel="noreferrer"
          href={caption.location?.toString()}
          className="text-xs dark:text-background float-right"
        >
          <Image
            src={Pin}
            width={24}
            height={24}
            className="inline"
            alt="Map pin"
          />
        </Link>
      )}
    </>
  );
};
