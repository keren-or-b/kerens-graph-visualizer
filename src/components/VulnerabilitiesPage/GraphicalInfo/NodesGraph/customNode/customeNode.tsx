import { Handle, Position, useReactFlow, useViewport } from "@xyflow/react";

import { useState } from "react";
import Popover from "./popup/popover";

interface dataType {
  label: string;
  ip: string;
  showHandles: boolean;
  first: boolean;
  image: string;
  position: "top-right" | "bottom-right" | "middle" | "left";
}

const CustomNode: React.FC<{ id: string; data: dataType }> = ({ id, data }) => {
  const zoom: { x: number; y: number; zoom: number } = useViewport();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      {showInfo && (
        <Popover nodeId={id} nodeData={data} zoomInfo={zoom} />
      )}

      {!data.first && <Handle type="target" position={Position.Left} id="1" />}
      <div className="z-[0] flex h-[91px] w-[81px] items-center justify-center overflow-hidden">
        <img
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)} 
          src={`/node-image-${data.image}.png`}
          alt={data.label}
          style={{
            width: "52.92px",
            height: "52.92px",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-[13px] font-semibold text-[#525D73]">
          {data.label}
        </div>
        <div className="text-[13px] font-normal text-[#667085]">
          {data.ip && data.ip}
        </div>
      </div>

      {data.showHandles && (
        <Handle type="source" position={Position.Right} id="2" />
      )}
    </>
  );
};

export default CustomNode;
