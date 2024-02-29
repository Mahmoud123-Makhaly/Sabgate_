"use client";
import React from "react";
import Image from "next/image";

import { Link } from "@navigation";
import { useTranslate } from "@app/hooks";

import contact from "@assets/images/contact-us/contact-us.png";
import pintrest from "@assets/svgs/contact-us/paintrst.svg";
import facebook from "@assets/svgs/contact-us/facebook.svg";
import insta from "@assets/svgs/contact-us/insta.svg";
import x from "@assets/svgs/contact-us/x.svg";
import youtube from "@assets/svgs/contact-us/youtube.svg";
import mail from "@assets/svgs/contact-us/mail.svg";
import whatsApp from "@assets/svgs/contact-us/whatsapp.svg";
import messanger from "@assets/svgs/contact-us/messanger.svg";

const ContactCard = () => {
  const t = useTranslate("COMP_Contact_Us.ContactCard");
  return (
    <div className="bg-light-blue paddingx-24 paddingy-39 rounded-4">
      <div>
        <Image src={contact} alt="contact" className="w-100 pb-3" />
      </div>
      <div className="d-flex flex-column gap-3">
        <p className="font-24 fw-bold">{t("CONTACT_US")}</p>
        <div className="bg-white flex-center rounded paddingy-14">
          <p className="fw-bold">{t("CONTACT_EMAIL")} </p>
          <Link href="mailto:info@sab-uae.com ">
            <p className="font-12 ps-3 text-black">info@sab-uae.com </p>
          </Link>
        </div>
        <div className="bg-white flex-center rounded paddingy-14">
          <p className="fw-bold">{t("CONTACT_PHONE")} </p>
          <Link href={"tel:+971 (600) 54-1110"}>
            <p className="font-12 ps-3 text-black">+971 (600) 54-1110</p>
          </Link>
        </div>
        <div className="bg-white flex-center rounded paddingy-14 gap-1">
          <p className="fw-bold">{t("CONTACT_SOCIAL")} </p>
          <div className="flex-center gap-2  ps-3">
            <Link href={"https://www.facebook.com/SABUAE"} target="_blank">
              <Image src={facebook} alt="facebook" />
            </Link>
            <Link href={"https://www.instagram.com/sab_uae"} target="_blank">
              <Image src={insta} alt="insta" />
            </Link>
            <Link href={"https://twitter.com/SAB_UAE"} target="_blank">
              <Image src={x} alt="x" />
            </Link>
            <Link href={"https://www.pinterest.com/shams_al_bawadi"} target="_blank">
              <Image src={pintrest} alt="pintrest" />
            </Link>
            <Link href={"https://www.youtube.com/c/SAB2281030"} target="_blank">
              <Image src={youtube} alt="youtube" />
            </Link>
          </div>
        </div>
        <div className="bg-white flex-center rounded paddingy-14 gap-1">
          <p className="fw-bold">{t("CONTACT_CONTACT_US")} </p>
          <div className="flex-between gap-2">
            <a href={"mailto:info@sab-uae.com"} className="border-end px-3">
              <Image src={mail} alt="mail" />
            </a>
            <a href={"https://wa.me/+971600541110"} className="border-end pe-3 flex-center" target="_blank">
              <Image src={whatsApp} alt="whatsApp" />
            </a>
            <Link href={"https://m.me/SABUAE"} className="flex-center pe-1" target="_blank">
              <Image src={messanger} alt="messanger" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
