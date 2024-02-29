"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Container } from "reactstrap";
import { Nav, Navbar, NavbarToggler } from "reactstrap";
import NavItems from "./NavItems";
import Link from "next/link";
import { useTranslate } from "@app/hooks";
import { ImageMaker, OffcanvasMaker } from "@components";
import logo from "@assets/images/logo.svg";
import xmark from "@assets/svgs/canvas-close.svg";
interface INavBar {
  canvasToggler: boolean;
  offCanvasToggler: () => void;
}
const NavBar = ({ canvasToggler, offCanvasToggler }: INavBar) => {
  const t = useTranslate("COMP_Navbar");
  const links = [
    { name: t("HOME"), href: "/" },
    {
      name: t("INSULATION"),
      children: [
        <Link href={"./about-me"} key={0}>
          About Me
        </Link>,
        <Link href={"./about-us"} key={1}>
          About Us
        </Link>,
        <Link href={"./what-we-offer"} key={2}>
          What We Offer
        </Link>,
      ],
    },
    { name: t("PACKAGES"), href: "/packages" },
    { name: t("APPLICATIONS"), href: "/services" },
    { name: t("SHOP"), href: "/list" },
    { name: t("GUIDE"), href: "/construction" },
    { name: t("QUESTIONS"), href: "/content/f-and-q" },
    { name: t("BLOG"), href: "/blog" },
    { name: t("CONTACT_US"), href: "/contact-us" },
  ];

  return (
    <Container>
      <Navbar className="d-flex ">
        <OffcanvasMaker
          header={
            <div className="flex-between canvas-header">
              <ImageMaker src={logo} />
            </div>
          }
          closeIcon={
            <Image src={xmark.src} alt="close canvas" width={20} height={20} />
          }
          canvasBody={
            <React.Fragment>
              <Nav>
                <NavItems links={links} />
              </Nav>
            </React.Fragment>
          }
          isOpen={canvasToggler}
          offcavasToggler={offCanvasToggler}
        />
        <Nav className="w-100 flex-between gap-2 d-none d-lg-flex">
          <NavItems links={links} />
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
