import React from "react";

import Pin from "/mappin.svg";

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
      <p className="gallery__item__caption text-sm text-center text-neutral-950 mt-2">
        {caption.short}
      </p>
      {!link && caption.location && (
        <p className="italic gallery__item__caption text-xs text-center text-neutral-950 mt-0">
          {caption.technical}
        </p>
      )}
      {!link && caption.location && (
        <a
          target="_blank"
          rel="noreferrer"
          href={caption.location?.toString()}
          className="text-xs text-foreground dark:text-neutral-950 transform"
        >
          <img
            src={Pin}
            width={24}
            height={24}
            className="inline transition duration-300 hover:scale-150 fill-blue-500 fill-current"
            alt="Map pin"
          />
        </a>
      )}
    </>
  );
};
