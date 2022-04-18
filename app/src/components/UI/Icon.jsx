import React from "react";

const Icon = ({ heading, svg, onIconClick }) => {

  return (
    <div className="flex justify-between pb-2">
      <div className="flex flex-col items-end">
        <div className="text-white font-bold">{heading}</div>
        <div className="text-white text-sm text-opacity-60">
          Browse and upload
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 relative">
        <div className="w-11 h-11 rounded-full bg-slate-500 flex items-center justify-center cursor-pointer"
        onClick={onIconClick}
        >
          {svg}
        </div>
        <div className=" border-l border-zinc-700"></div>
      </div>
    </div>
  );
};

export default Icon;
