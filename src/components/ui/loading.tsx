const Loading: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  return (
    <div
      className={`mx-auto flex w-[${width}px] h-[${height}vh] max-w-md items-center justify-center rounded-lg border px-6 py-3 shadow-sm`}
    >
      <div className="spinner"></div>
    </div>
  );
};
export default Loading;
