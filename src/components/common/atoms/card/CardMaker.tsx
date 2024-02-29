import React, { Children, ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Badge, Card, CardBody, CardImg } from "reactstrap";
import Image from "next/image";
import clsx from "clsx";
import { ButtonMaker, ImageMaker } from "@components";
import { Favourite } from "../favourite";
interface ICardMaker {
  img: StaticImport | string;
  ratio: "square" | "standard";
  children: React.ReactNode;
  horizontal?: boolean;
  badgetext?: string;
  favorite?: boolean;
  badgeColor?: string;
  favoriteComp?: ReactNode;
  className?: string;
  imgClassName?: string;
}
const CardMaker = (props: ICardMaker) => {
  const {
    img,
    children,
    ratio,
    horizontal = false,
    badgetext,
    favorite,
    badgeColor = "success",
    favoriteComp,
    className,
    imgClassName,
  } = props;
  const addToWishlist = () => {};
  return (
    <Card
      body
      className={`${className}`}
    >
      <div className="flex-between card-upper w-100">
        {favorite && favoriteComp ? favoriteComp : <Favourite />}
        {badgetext && (
          <Badge color={badgeColor} className="rounded-pill">
            {badgetext}
          </Badge>
        )}
      </div>
      <div className={`card-img ${imgClassName}`}>
        <div
          className={`${ratio} `}
          style={{ backgroundImage: `url("${img}")` }}
        >
          <ImageMaker src={img} alt="card image" className="d-none" />
        </div>
      </div>
      <CardBody className="p-0 w-100">{children}</CardBody>
    </Card>
  );
};

export default CardMaker;
