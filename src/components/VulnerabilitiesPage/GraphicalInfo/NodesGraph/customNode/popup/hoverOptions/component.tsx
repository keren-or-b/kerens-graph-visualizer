import { ReceiptOutlined } from "@mui/icons-material";

interface OptionProps {
  position: {
    left: number;
    top: number;
  };
}

const ComponentPopOver: React.FC<OptionProps> = ({ position }) => {
  return (
    <div
      style={{
        top: position.top,
        left: position.left,
      }}
      className="absolute z-[5000] h-[121px] w-[362px] rounded bg-white shadow-lg transition-opacity duration-200 ease-in-out"
    >
      <div className="flex items-center gap-2 px-4 pt-4">
        <img src={"/serverIcon.png"} alt={"serverIcon"} className="h-10 w-10" />
        <h2 className="text-[13px] font-semibold text-[#525D73]">Loremipsu</h2>
      </div>

      <div className="flex items-center gap-1 px-4">
        <span className="text-[15px] font-bold text-[#525D73]">
          <ReceiptOutlined fontSize="small" style={{ color: "#858D9D" }} />
          Lorem:
        </span>
        <span className="text-[15px] font-bold text-[#525D73]">
          Loremipsum Loremipsum
        </span>
        <span className="rounded bg-[#F2EDFF] px-2 py-1 text-[13px] font-bold text-[#6236CC]">
          1.2.3.4
        </span>
      </div>

      <div className="flex flex-wrap gap-1 px-4 pt-2">
        <span className="rounded bg-[#F2EDFF] px-2 py-1 text-[13px] font-bold text-[#6236CC]">
          1.2.3.4
        </span>
        <span className="text-[15px] font-bold text-[#525D73]">Loremipsum</span>
        <span className="rounded bg-[#F2EDFF] px-2 py-1 text-[13px] font-bold text-[#6236CC]">
          1.2.3.4
        </span>
        <span className="rounded bg-[#F2EDFF] px-2 py-1 text-[13px] font-bold text-[#6236CC]">
          1.2.3.4
        </span>
      </div>
    </div>
  );
};
export default ComponentPopOver;
