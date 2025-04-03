export const calculatePopoverPosition = (
  position: "top-right" | "bottom-right" | "middle" | "left",
  fixedWidth: number,
  zoom: { x: number; y: number },
): { left: number; top: number } => {
  let left = 0;
  let top = 0;
  switch (position) {
    case "top-right":
      top = zoom.y - 20;
      left = 750 + zoom.x + fixedWidth;

      break;
    case "bottom-right":
      top = 200 + zoom.y;
      left = 750 + zoom.x + fixedWidth;

      break;
    case "middle":
      top = 200 + zoom.y;
      left = 650 + zoom.x + fixedWidth;
      break;
    case "left":
      top = 200 + zoom.y;
      left = 500 + zoom.x + fixedWidth;
      break;
  }
  return { left: left, top: top };
};
