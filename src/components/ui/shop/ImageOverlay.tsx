import React from "react";

import { Link } from "@navigation";
import { ImageMaker } from "@components";

interface IImageOverlayProps {
  imgSrc: string;
  imgAlt: string;
  text: string;
  textBackground: string;
  className?: string;
  path?: string;
}
const ImageOverlay = (props: IImageOverlayProps) => {
  const { imgSrc, imgAlt, text, textBackground, className, path = "" } = props;
  return (
    <Link
      href={path}
      className={`${className} image_overlay d-block position-relative`}
    >
      <ImageMaker src={imgSrc} alt={imgAlt} />
      <p
        className={` bg-${textBackground} position-absolute   text-white fw-bold text`}
      >
        {text}
      </p>
    </Link>
  );
};

export default ImageOverlay;
