"use client";

import React, { useEffect, useState } from "react";
import { Severity } from "../../../../constans/chartBaseFields";
import { severityColors } from "../../../../utils/severityColors/severityColors";
import Loading from "@/components/ui/loading";

interface Serverasset {
  name: string;
  ip: string;
  severity: Severity;
}
interface AssetsDataRisksTableProps {
  assetsData: Serverasset[];
  finishedFetching: boolean;
}

const ITEMS_PER_PAGE = 2;

const AssetsDataRisksTable: React.FC<AssetsDataRisksTableProps> = ({
  assetsData,
  finishedFetching,
}) => {
  const [page, setPage] = useState(0);
  const [currentassetsData, setCurrentassetsData] = useState<Serverasset[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    setTableContent();
  }, [assetsData?.length]);

  useEffect(() => {
    setTableContent();
  }, [page]);


  const setTableContent = () => {
    if (assetsData) {
      setTotalPages(Math.ceil(assetsData.length / ITEMS_PER_PAGE));

      const start = page * ITEMS_PER_PAGE;
      const end = Math.min(start + ITEMS_PER_PAGE, assetsData.length); // Prevent overflow

      setStartIndex(start);
      setEndIndex(end);

      const assetsDataSlice = assetsData.slice(start, end);
      setCurrentassetsData(assetsDataSlice);
    } 
  };
  //Show Loading until data is ready
  if (!finishedFetching) {
    return <Loading width={367} height={10} />;
  }
  return (
    <div className="mx-auto w-[367px] max-w-md rounded-lg border px-6 py-3 shadow-sm">
      {currentassetsData && currentassetsData.length > 0 ? (
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="w-[60%] text-left text-[13px] font-normal text-[#858D9D]">
                assetsData
              </th>
              <th className="text-right text-[13px] font-normal text-[#858D9D]">
                Contextual Risks
              </th>
            </tr>
          </thead>
          <tbody>
            {currentassetsData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="flex w-[60%] items-center gap-2 p-2">
                  <img
                    src={"/serverIcon.png"}
                    alt={"serverIcon"}
                    className="h-10 w-10"
                  />
                  <div>
                    <div className="text-[13px] font-semibold text-[#525D73]">
                      {item.name}
                    </div>
                    <div className="text-[9.45px] font-medium text-[#667085]">
                      {item.ip}
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <span
                    className={`${severityColors[item.severity]} rounded-full px-4 py-1 text-xs font-semibold`}
                  >
                    {item.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="text-[#667085]">Nothing to show yet</span>
      )}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 text-[13px] font-normal text-[#667085]">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="disabled:opacity-30"
          >
            &lt;
          </button>
          <span className="text-[13px] font-normal text-[#667085]">
            Showing {startIndex + 1}-{endIndex} of{" "}
            {assetsData ? assetsData.length : 0}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages - 1}
            className="disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default AssetsDataRisksTable;
