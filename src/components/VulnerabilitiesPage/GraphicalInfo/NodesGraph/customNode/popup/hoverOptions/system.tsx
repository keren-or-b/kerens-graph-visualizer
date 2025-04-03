interface OptionProps {
  position: {
    left: number;
    top: number;
   
  };
}

const SystemPopOver: React.FC<OptionProps> = ({ position
}) => {
  return (
    <div
      style={{
        top:position.top,
        left:position.left,
      }}
      className={`absolute z-[2000] h-[168px] w-[460px] rounded bg-white shadow-lg transition-opacity duration-200 ease-in-out`}
    >
      <div className="h-[95px] w-[391px] p-4">
        <div className="mb-4 inline-block rounded bg-red-100 px-2 py-1 font-bold text-red-600">
          Lorem Ipsum Dolor Sit
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
          <div className="rounded bg-red-100 font-semibold text-red-600">
            1.2.3.4
          </div>
        </div>
        <div className="mt-4 inline-block rounded bg-purple-100 font-semibold text-purple-600">
          Lorem: <span className="font-semibold">1.2.3.4</span>
        </div>
      </div>

    </div>
  );
};
export default SystemPopOver;
