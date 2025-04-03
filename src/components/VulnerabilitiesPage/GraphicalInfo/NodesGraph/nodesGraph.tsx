"use client";

import React from "react";
import {  ReactFlow} from "@xyflow/react";


import "@xyflow/react/dist/style.css";
import CustomNode from "./customNode/customeNode";
import { InitialEdges, InitialNodes } from "@/constans/nodesGraph/intialValues";

const nodeTypes = { customNode: CustomNode };

const NodesGraph = () => {
  return (
    <div
      className="flex h-[50vh] w-[750px] flex-col items-center"
    >
      <ReactFlow
        style={{ width: "750px", height: "50vh" }}
        nodes={InitialNodes}
        edges={InitialEdges}
        nodeTypes={nodeTypes}
        fitView
      />
      <hr className="mx-auto my-4 w-[85%] border-t border-gray-300" />

      <div className="flex w-full justify-start gap-4 px-10">

        <img src={`/lorem2.png`} alt="Image 1" />
        <img src={`/lorem3.png`} alt="Image 2" />
        <img src={`/lorem1.png`} alt="Image 3" />
      </div>
    </div>
  );
};

export default NodesGraph;

