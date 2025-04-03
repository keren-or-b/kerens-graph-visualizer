import {  ReceiptOutlined } from "@mui/icons-material";

interface OptionProps {
  name: string;
  ip: string;

  position: {
    left: number;
    top: number;
  };
}

const ServerPopOver: React.FC<OptionProps> = ({ name, ip, position }) => {
  return (
    <div
      style={{
        top: position.top,
        left: position.left,
      }}
      className="absolute z-[2000] h-[121.69px] w-[255px] rounded bg-white shadow-lg transition-opacity duration-200 ease-in-out"
    >
      <div className="px-4">
        <div className="flex items-center gap-2 pt-4">
          <img
            src={"/serverError.png"}
            alt={"serverError"}
            className="h-10 w-10"
          />
          <div>
            <h2 className="text-[13px] font-semibold text-[#525D73]">{name}</h2>
            <h3 className="text-[9.45px] font-medium text-[#667085]">{ip}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 font-medium text-gray-700">
          <ReceiptOutlined fontSize="small" style={{ color: "#858D9D" }} />
          <span className="text-[15px] font-bold text-[#525D73]">Lorem:</span>
          <span className="bg-[#FFF9ED] text-[13px] font-semibold text-[#EBA622]">
            Lorem Ipsum
          </span>
        </div>
        <div className="pt-1 text-[15px] font-bold text-[#525D73]">
          Loremipsum
          <span className="rounded-lg bg-[#ECF5FF] px-2 py-1 text-[13px] font-semibold text-[#0053B5]">
            Lorem 1234, 5678
          </span>
        </div>
      </div>
    </div>
  );
};
export default ServerPopOver;
