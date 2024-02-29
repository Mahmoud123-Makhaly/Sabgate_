import React, { ReactNode } from 'react';
import { ButtonMaker, CardMaker } from '@components';
import img from '@assets/images/home/card/card-img.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Link } from '@navigation';
interface IProductCard {
  img: string | StaticImport;
  title: string;
  titleColor?: string;
  description?: string;
  specs?: ReactNode;
  price?: string;
  pricePer?: string;
  buttons?: ReactNode;
  badgeText?: string;
  favorite?: boolean;
}
const ProductCard = (props: IProductCard) => {
  const {
    img,
    title,
    titleColor = 'primary',
    description,
    specs,
    price,
    pricePer,
    badgeText,
    favorite,
    buttons,
  } = props;
  return (
    <CardMaker img={img} ratio="square" badgetext={badgeText} favorite className="border">
      <div>
        <Link href="/product/123">
          <h6 className={`border-bottom py-3 text-${titleColor}`}>{title}</h6>
          {description && <p className="text-gray  border-bottom py-3">{description}</p>}
        </Link>
        {specs && <div className="flex-col-start border-bottom py-3">{specs}</div>}
        <div className="flex-between border-bottom py-3">
          <p className="fw-bold">{price}</p>
          <p className="text-gray"> {pricePer} </p>
        </div>
        {buttons && <div>{buttons}</div>}
      </div>
    </CardMaker>
  );
};

export default ProductCard;
