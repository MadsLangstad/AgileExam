import React, { useState, useEffect } from "react";
import AnnouncementModal from "./announcement-modal";

interface AnnouncementComponentProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const AnnouncementComponent: React.FC<AnnouncementComponentProps> = ({
  targetRef,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [announcement, setAnnouncement] = useState<string>("");
  const [duration, setDuration] = useState<number>(1); // Default duration in minutes
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-blue-500"); // Default background color

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
      }, duration * 60000); // Convert minutes to milliseconds

      // Clean up the timer when component unmounts or when isModalVisible changes
      return () => clearTimeout(timer);
    }
  }, [isModalVisible, duration]);

  const colors = [
    "bg-blue-800",
    "bg-blue-600",
    "bg-blue-400",
    "bg-purple-800",
    "bg-purple-600",
    "bg-teal-500",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg w-full max-w-3xl">
      <AnnouncementModal
        isVisible={isModalVisible}
        announcement={announcement}
        backgroundColor={backgroundColor}
        targetRef={targetRef}
      />
      <div className="flex gap-4 justify-center items-center mb-4">
        <div className="flex-1 mr-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Make an announcement
          </h2>
          <input
            type="text"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Type something..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <p className="text-sm text-gray-500 mb-4">
            **Announcements will be displayed as a pop-up on all cards.
          </p>
          <div className="flex items-center">
            <label className="text-sm text-gray-500 mr-2">
              Duration (minutes):
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-lg ml-2"
              />
            </label>
            <button
              onClick={handleButtonClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-auto"
            >
              Post
            </button>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center mt-6">
          <h3 className="text-sm text-gray-500 mb-2">
            CHOOSE BACKGROUND COLOR
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {colors.map((color) => (
              <div
                key={color}
                className={`${color} w-12 h-12 rounded-full cursor-pointer`}
                onClick={() => setBackgroundColor(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
