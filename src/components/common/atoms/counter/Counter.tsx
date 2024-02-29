"use client";

import React, { Dispatch, SetStateAction } from "react";
interface ICounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
const Counter = (props: ICounterProps) => {
  const { count, setCount } = props;
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="rounded-2 border py-2 px-3 flex-between ">
      <p className="icons flex-col justify-content-center me-2">
        <i
          className="fa-solid fa-caret-up text-muted font-15"
          style={{ lineHeight: "0.6", cursor: "pointer" }}
          onClick={handleIncrement}
        ></i>
        <i
          className="fa-solid fa-caret-down text-muted font-15"
          style={{ lineHeight: "0.6", cursor: "pointer" }}
          onClick={handleDecrement}
        ></i>
      </p>
      <p className="font-12">{count}</p>
    </div>
  );
};

export default Counter;
