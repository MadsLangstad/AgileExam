import React from "react";
import { useNavigate } from "react-router-dom";

const NowShowing: React.FC<{ currentImage: string }> = ({ currentImage }) => {
  const navigate = useNavigate();

  const navigateToFullScreen = () => {
    // Logic for handling sign-in can be added here
    // For now, we'll just navigate to the dashboard, needs further development to handel username and password
    navigate("/fullscreen");
  };

  return (
    <div
      onClick={navigateToFullScreen}
      className="flex flex-col h-full w-full justify-center items-center gap-4"
    >
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
