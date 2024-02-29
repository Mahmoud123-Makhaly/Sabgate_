import React from "react";
import Image from "next/image";
import { DropDown } from "@components";
import cart from "@assets/svgs/cart-icon.svg";
import { useTranslate } from "@app/hooks";
import { Link } from "@navigation";
const MiniCart = () => {
  const t = useTranslate("COMP_ToolBar");
  return (
    <Link href={"/cart"}>
      <DropDown menuItems={[""]} title={t("SHOPPING_CART")}>
        <Image src={cart} alt="cart" className="me-1" />
      </DropDown>
    </Link>
  );
};

export default MiniCart;
