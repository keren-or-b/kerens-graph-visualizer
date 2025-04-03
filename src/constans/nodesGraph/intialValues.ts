// Initial nodes setup
export const InitialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 0, y: 100 },
    data: {
      label: "LoremIpsu",
      showHandles: true,
      first: true,
      image: "1",
      position: "left",
    },
  },
  {
    id: "2",
    type: "customNode",
    position: { x: 250, y: 100 },
    data: {
      label: "LoremIpsu",
      showHandles: true,
      first: false,
      image: "2",
      position: "middle",
    },
  },
  {
    id: "3",
    type: "customNode",
    position: { x: 500, y: 100 },
    data: {
      label: "LoremIpsu",
      showHandles: true,
      first: false,
      image: "2",
      position: "middle",
    },
  },
  {
    id: "4",
    type: "customNode",
    position: { x: 800, y: 0 },
    data: {
      label: "LoremIpsumDolorSit",
      ip: "192.168.1.1",
      showHandles: false,
      first: false,
      image: "3",
      position: "top-right",
    },
  },
  {
    id: "5",
    type: "customNode",
    position: { x: 800, y: 200 },
    data: {
      label: "LoremIpsumDolorSit002",
      ip: "192.168.1.1",
      showHandles: false,
      first: false,
      image: "3",
      position: "bottom-right",
    },
  },
];

export const InitialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
  { id: "e2-3", source: "2", target: "3", type: "step" },
  { id: "e3-4", source: "3", target: "4", type: "default" },
  { id: "e3-5", source: "3", target: "5", type: "default" },
];
