"use client";
import React from "react";

interface PropertiesProps {
  name: string;
  value: string;
}
const Properties = ({ name, value }: PropertiesProps) => {
  return (
    <div className="border text-center p-3 rounded">
      <p className="border-bottom pb-2 mb-2 fw-bold font-16">{name}</p>
      <p className="text-gray">{value}</p>
    </div>
  );
};

export default Properties;
