"use client";

import React, { useEffect, useState } from "react";

import "@xyflow/react/dist/style.css";
import AssetsRisksTable from "./ContextualRisks/contextualRiskTable";
import AssetsPieChart from "./ContextualRisks/contextualRiskChart";
import { Severity } from "@/constans/chartBaseFields";
import Loading from "@/components/ui/loading";
import dynamic from "next/dynamic";

interface ServerData {
  name: string;
  ip: string;
  severity: Severity;
}

//Handeling lazy loading
const NodesGraph = dynamic(() => import("./NodesGraph/nodesGraph"), {
  loading: () => <Loading width={750} height={50} />, // Display loading spinner while the component is loading
  ssr: false,
});

const GraphicalInfo = () => {
  const [assets, setAssets] = useState<ServerData[]>([]);
  const [dataFetchComplete, setdataFetchComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setdataFetchComplete(false);
        const response = await fetch("/mocks/Assets.json/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ServerData[] = await response.json();
        setAssets(data);
      } catch (error) {
        console.error("Error fetching assets:", error);
      } finally {
        setdataFetchComplete(true);
      }
    };
    //you can set timeout here to see slow request handeling
    fetchData();
  }, []);

  return (
    <div className="graphical-info-main w-[787px] rounded-lg border border-border p-4">
      <NodesGraph />

      <div className="px-6 py-3 text-[20px] font-bold text-[#02983E]">
        Lorem ipsum dolor sit
      </div>
      <div className="flex flex-1">
        <AssetsRisksTable
          assetsData={assets}
          finishedFetching={dataFetchComplete}
        />
        <AssetsPieChart
          assetsData={assets}
          finishedFetching={dataFetchComplete}
        />
      </div>
    </div>
  );
};

export default GraphicalInfo;
