import React from "react";

const NowShowing: React.FC<{ currentImage: string }> = ({ currentImage }) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-4">
      <h3 className="text-2xl font-bold text-blue-800 mb-2">Now Showing</h3>
      {currentImage ? (
        <img
          src={currentImage}
          alt="Currently Showing"
          className="h-[280px] w-[350px]"
        />
      ) : (
        <p>No image currently showing</p>
      )}
    </div>
  );
};

export default NowShowing;
