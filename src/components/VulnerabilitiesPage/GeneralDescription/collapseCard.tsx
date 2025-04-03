import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";

import { useState } from "react";

interface Item {
  title: string;
  type: string;
  description: string;
  extraDescription?: string;
}


const CollapseCard: React.FC<{ item: Item }> = ({ item }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <Card style={{ textAlign: "center" }} onClick={() => setExpand(!expand)}>
        <div className="flex">
          <CardHeader
            avatar={
              <Avatar
                alt="server"
                src="/serverIcon.png"
                sx={{ width: 56, height: 56 }}
              />
            }
            title={
              <Typography
                variant="h6"
                sx={{
                  margin: 0,
                  fontWeight: "600",
                  color: "#404A60",
                  fontSize: "12.5px",
                }}
              >
                {item.type}
              </Typography>
            }
            subheader={
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "500", color: "#667085", fontSize: "9.45px" }}
              >
                {item.type}
              </Typography>
            }
          >
            <div>{item.title}</div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-px bg-gray-300"></div>

              <div className="text-[13px] font-normal text-[#404A60]">
                {item.description}
              </div>
            </div>
          </CardContent>
        </div>

        <Collapse in={expand} style={{ padding: "10px" }}>
          <span className="text-[15px] font-normal text-[#525D73]">
            {item.extraDescription}
          </span>
        </Collapse>
      </Card>
    </>
  );
};
export default CollapseCard;
