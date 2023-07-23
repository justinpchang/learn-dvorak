interface Props {
  percent: number;
}

function ProgressBar({ percent }: Props) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
      <div
        style={{ width: `${percent}%` }}
        className="bg-[#268bd2] h-1.5 rounded-full transition-all duration-500"
      ></div>
    </div>
  );
}

export { ProgressBar };
