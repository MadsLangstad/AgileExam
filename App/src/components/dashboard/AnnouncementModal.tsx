import React, { useState } from 'react';

interface AnnouncementModalProps {
  isVisible: boolean;
  onClose: () => void;
  announcement: string;
  setAnnouncement: React.Dispatch<React.SetStateAction<string>>;
  clearAnnouncement: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ isVisible, onClose, announcement, setAnnouncement, clearAnnouncement }) => {
  const [selectedCards, setSelectedCards] = useState<boolean[]>([false, false, false, false]);

  const handleCardClick = (index: number) => {
    const updatedCards = selectedCards.map((selected, i) => (i === index ? !selected : selected));
    setSelectedCards(updatedCards);
  };

  const handlePublish = () => {
    alert(`Announcement: ${announcement}\nSelected Cards: ${selectedCards}`);
    clearAnnouncement(); // Clear announcement after publishing
    onClose(); // Close modal after publishing
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-800">Publish this announcement on all cards?</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <input
          type="text"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder="The offices in the 3rd floor is now closed due to renovations!"
          className="w-full p-4 border border-gray-300 rounded-lg mb-6"
        />
        <button
          onClick={handlePublish}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-6 w-full text-xl"
        >
          Publish
        </button>
        <p className="text-lg text-blue-800 mb-2 text-center">Click the cards to select</p>
        <div className="flex justify-center space-x-4">
          {selectedCards.map((selected, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-24 h-16 rounded-lg border-2 cursor-pointer border-blue-600 ${index === 0 ? 'bg-white' : index === 1 ? 'bg-blue-500' : index === 2 ? 'bg-blue-800' : 'bg-teal-500'}`}
            >
              {selected && <div className="w-full h-full flex items-center justify-center">✔</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
