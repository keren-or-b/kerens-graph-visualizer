import { useReactFlow } from "@xyflow/react";
import { createPortal } from "react-dom";
import { calculatePopoverPosition } from "@/constans/nodesGraph/popoverPositionCalc";
import SystemPopOver from "./hoverOptions/system";
import ComponentPopOver from "./hoverOptions/component";
import ServerPopOver from "./hoverOptions/server";

interface dataType {
  label: string;
  ip: string;
  showHandles: boolean;
  first: boolean;
  image: string;
  position: "top-right" | "bottom-right" | "middle" | "left";
}
const Popover: React.FC<{
  nodeId: string;
  nodeData: dataType;
  zoomInfo: { x: number; y: number; zoom: number };
}> = ({ nodeId, nodeData, zoomInfo }) => {
  const { getNode } = useReactFlow();
  const node = getNode(nodeId);

  if (!node) return null; // Prevent errors

  //calculating for determinant popover position using zoom info from react flow
  const fixClosedSidebar =
    localStorage.getItem("sidebarOpen") === "false" ? 0 : 120;
  const itemPosition = calculatePopoverPosition(
    nodeData.position,
    fixClosedSidebar,
    zoomInfo,
  );

  return createPortal(
    <>
      {nodeId === "1" && <SystemPopOver position={itemPosition} />}

      {(nodeId === "2" || nodeId === "3") && (
        <ComponentPopOver position={itemPosition} />
      )}
      {(nodeId === "4" || nodeId === "5") && (
        <ServerPopOver
          name={nodeData.label}
          ip={nodeData.ip}
          position={itemPosition}
        />
      )}
    </>,
    document.body, // Render outside React Flow
  );
};
export default Popover;
