import React, { useState } from "react";
import AnnouncementModal from "./AnnouncementModal";

const AnnouncementComponent: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [announcement, setAnnouncement] = useState<string>("");

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <AnnouncementModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        announcement={announcement}
        setAnnouncement={setAnnouncement}
        clearAnnouncement={() => setAnnouncement("")}
      />
      <div className="p-4 rounded-lg col-span-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-800">
            Make an announcement
          </h2>
        </div>
        <p className="text-sm text-gray-500">
          **Announcements will be displayed as a pop-up on all cards shown.
        </p>
        <div className="flex items-center">
          <input
            type="text"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Type something..."
            className="w-full p-2 border border-black rounded-lg"
          />
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleButtonClick}
            className="rounded bg-sky-600 text-white font-bold py-2 px-4 rounded hover:bg-sky-800"
          >
            Post
          </button>
        </div>
      </div>
      {/* Color buttons */}
      <div className="w-[300px] m-4">
        <p className="text-lg text-blue-700 font-bold mb-2">
          CHOOSE BACKGROUND COLOR
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div className="w-12 h-12 bg-blue-800 rounded-full"></div>
          <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="w-12 h-12 bg-purple-800 rounded-full"></div>
          <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
          <div className="w-12 h-12 bg-teal-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
