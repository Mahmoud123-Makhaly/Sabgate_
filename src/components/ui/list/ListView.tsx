"use client";

import React from "react";
import Image from "next/image";

import grid from "@assets/svgs/list/grid.svg";
import gridActive from "@assets/svgs/list/gtid-active.svg";
import list from "@assets/svgs/list/list.svg";
import listActive from "@assets/svgs/list/list-acive.svg";

interface ListViewProps {
  listView: boolean;
  setListView: (list: boolean) => void;
}
const ListView = (props: ListViewProps) => {
  const { listView, setListView } = props;
  return (
    <div className="d-flex">
      <div className=" p-1 rounded me-2">
        <a
          onClick={() => setListView(false)}
          className={` me-1 view-mode ${listView ? "" : "active"}`}
        >
          <Image src={listView ? grid : gridActive} alt="grid view" />
        </a>
      </div>
      <div className=" p-1 rounded">
        <a
          onClick={() => setListView(true)}
          className={`me-1 view-mode  ${listView ? "active" : ""}`}
        >
          <Image src={listView ? listActive : list} alt="list view" />
        </a>
      </div>
    </div>
  );
};

export default ListView;
