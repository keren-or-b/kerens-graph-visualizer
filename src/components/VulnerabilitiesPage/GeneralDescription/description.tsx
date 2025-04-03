"use client";

import React, { useEffect, useState } from "react";

import "@xyflow/react/dist/style.css";
import CollapseCard from "./collapseCard";
interface InfoItem {
  label: string;
  value: string;
}

interface ServerItem {
  title: string;
  type: string;
  description: string;
  extraDescription?: string;
}

interface DataType {
  description?: string;
  extra?: string;
  info?: InfoItem[];
  servers?: ServerItem[];
}

const Description = () => {
  const [Data, setData] = useState<DataType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mocks/servers.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: DataType | null = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="info-main-div scrollbar-hide flex h-screen w-[385px] flex-col justify-start overflow-y-auto rounded-lg border border-border">
      <div className="px-8 py-2">
        <span className="text-[20px] font-bold text-[#02983E]">
          Description
        </span>
        <div className="font-normak text-[12px] text-[#525D73]">
          {Data && Data.description ? Data.description : ""}
        </div>

        {Data?.extra && (
          <>
            <span className="text-[20px] font-bold text-[#02983E]">Extra</span>
            <div className="font-normak text-[12px] text-[#525D73]">
              {Data.extra}
            </div>
          </>
        )}

        <hr className="border-l border-[#E0E2E7]" />

        <div className="space-y-2 pt-4">
          {Data?.info?.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <span className="text-[15px] font-bold text-[#334155]">
                {item.label}:
              </span>
              <span className="text-[15px] font-normal text-[#525D73]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {Data?.servers?.map((item, index) => (
            <CollapseCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
