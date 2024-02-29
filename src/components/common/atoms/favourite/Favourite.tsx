"use client";

import React, { useState } from "react";
// import toast from 'react-hot-toast';

import { ButtonMaker } from "@components";

const Favourite = () => {
  const [icon, setIcon] = useState(true);
  const handleChangeIcon = () => {
    setIcon(!icon);
    // if (icon) {
    //   toast.success(t('ADD_TO_FAVOURITE_MESSEGE'));
    // } else {
    //   toast.success(t('REMOVE_TO_FAVOURITE_MESSEGE'));
    // }
  };
  return (
    <ButtonMaker
      design="border rounded-circle bg-white favorite-btn"
      block={false}
    >
      <i
        className={` ${
          icon ? "fa-regular fa-heart" : " fa-heart fa-solid"
        } text-primary`}
        onClick={handleChangeIcon}
      ></i>
    </ButtonMaker>
  );
};

export default Favourite;
