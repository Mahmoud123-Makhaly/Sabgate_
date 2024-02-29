import React from "react";
import Image from "next/image";

import { Link } from "@navigation";

interface ShareInSocialProps {
  title: string;
  images: Array<{ imgSrc: string; href: string; ImageClassName?: string }>;
  className?: string;
}
const ShareInSocial = (props: ShareInSocialProps) => {
  const { title, images, className } = props;
  return (
    <div>
      <div className="mb-3">
        <p className="m-0 fw-bold font-16">{title}</p>
      </div>
      <div className={`${className ? className : "d-flex"}`}>
        {images?.map((item, index) => (
          <Link href={item.href} key={index} className={item.ImageClassName}>
            <Image src={item.imgSrc} alt={"Social"} width={36} height={36} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShareInSocial;
