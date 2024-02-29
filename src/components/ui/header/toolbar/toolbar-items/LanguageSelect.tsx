"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ButtonMaker, DropDown } from "@components";
import { Input, Label } from "reactstrap";
import { usePathname, useRouter } from "@navigation";
import { useLocale } from "next-intl";
import arabic from "@assets/svgs/arabic-icon.svg";
import english from "@assets/svgs/english-icon.svg";
const LanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const savedLang = localStorage.getItem("I18N_LANGUAGE");
    if (savedLang && savedLang != locale) {
      router.push(pathname, { locale: savedLang });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguageAction = (lang: string) => {
    localStorage.setItem("I18N_LANGUAGE", lang);
    router.push(pathname, { locale: lang });
  };

  const languages = [
    <div
      className="bg-white border-0 flex-between gap-2"
      key={0}
      onClick={() => changeLanguageAction("ar")}
    >
      <Label htmlFor="arabic" className="m-0">
        Arabic
      </Label>
      <Input
        id="arabic"
        type="radio"
        className="m-0"
        defaultChecked={locale === "ar" ? true : false}
      />
    </div>,
    <div
      className="bg-white border-0 flex-between gap-2"
      key={1}
      onClick={() => changeLanguageAction("en")}
    >
      <Label htmlFor="english" className="m-0">
        English
      </Label>
      <Input
        id="english"
        type="radio"
        className="m-0"
        defaultChecked={locale === "en" ? true : false}
      />
    </div>,
  ];
  return (
    <DropDown menuItems={languages} title={locale.toUpperCase()}>
      <Image
        src={locale === "ar" ? arabic : english}
        alt="favorite"
        className="me-1"
      />
    </DropDown>
  );
};

export default LanguageSelect;
