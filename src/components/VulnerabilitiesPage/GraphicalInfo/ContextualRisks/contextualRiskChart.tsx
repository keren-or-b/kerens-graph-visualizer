"use client";

import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
  chartBaseFields,
  Severity,
} from "../../../../constans/chartBaseFields";
import Loading from "@/components/ui/loading";

interface ServerAsset {
  name: string;
  ip: string;
  severity: Severity;
}
interface assetsPieChartProps {
  assetsData: ServerAsset[];
  finishedFetching: boolean;
}

const AssetsDataPieChart: React.FC<assetsPieChartProps> = ({
  assetsData,
  finishedFetching,
}) => {
  const [chartassetsData, setChartassetsData] = useState(chartBaseFields);

  useEffect(() => {
    const severityCounts = assetsData.reduce(
      (acc, { severity }) => ({
        ...acc,
        [severity]: (acc[severity] || 0) + 1,
      }),
      {} as Record<ServerAsset["severity"], number>,
    );

    setChartassetsData(
      chartBaseFields.map((item) => ({
        ...item,
        value: severityCounts[item.label as Severity] || 0,
      })),
    );
  }, [assetsData?.length]);

  if (!finishedFetching) {
    return <Loading width={340} height={10} />;
  }

  return (
    <div className="w-[340px] rounded-lg border px-6 py-3 text-[#667085]">
      {assetsData && assetsData.length > 0 ? (
        <>
          <Typography fontSize={"18px"} fontWeight={500}>
            Contextual Risk
          </Typography>

          <div className="flex">
            <List dense sx={{ height: 132, padding: 0 }}>
              {chartassetsData?.map((item) => (
                <ListItem key={item.id}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      backgroundColor: item.color,
                      borderRadius: "50%",
                      marginRight: 1,
                    }}
                  />
                  <ListItemText>
                    <Box display="flex" gap={1}>
                      <p className="text-[15px] font-bold text-[#383874]">
                        {item.value}
                      </p>

                      <p className="text-[13px] font-normal text-[#383874]">
                        {item.label}
                      </p>
                    </Box>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                width: 150,
                height: 150,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PieChart
                series={[
                  {
                    data: chartassetsData,
                    innerRadius: 55,
                    outerRadius: 65,
                    cornerRadius: 3,
                    cx: 60,
                    cy: 70,
                  },
                ]}
                width={148.96}
                height={148.96}
                slotProps={{ legend: { hidden: true } }}
              />
            </Box>
          </div>
        </>
      ) : (
        <span>Nothing to show yet</span>
      )}
    </div>
  );
};
export default AssetsDataPieChart;
