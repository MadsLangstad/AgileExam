import React, { useState } from 'react';
import AnnouncementModal from './AnnouncementModal';

const AnnouncementComponent: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [announcement, setAnnouncement] = useState<string>('');


  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <AnnouncementModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        announcement={announcement}
        setAnnouncement={setAnnouncement}
        clearAnnouncement={() => setAnnouncement('')}

      />

      <div className="p-6 rounded-lg w-96">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue-800">Make an announcement</h2>
          <button
            onClick={handleButtonClick}
            className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <input
          type="text"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder="Type something..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          **Announcements will be displayed as a pop-up on all cards shown.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
