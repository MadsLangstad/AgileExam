import { useState } from "react";
import AddBirthdayCardModal from "./add-birthday-card-modal";
import AddEventCardModal from "./add-event-card-modal";
import AddMediaCardModal from './add-media-card-modal';

const AddPost = () => {
  const [isMediaModalVisible, setMediaModalVisible] = useState(false);
  const [isBirthdayModalVisible, setBirthdayModalVisible] = useState(false);
  const [isEventModalVisible, setEventModalVisible] = useState(false);

  const handleMediaButtonClick = () => {
    setMediaModalVisible(true);
  };

  const handleBirthdayButtonClick = () => {
    setBirthdayModalVisible(true);
  };

  const handleEventButtonClick = () => {
    setEventModalVisible(true);
  };

  const handleCloseMediaModal = () => {
    setMediaModalVisible(false);
  };

  const handleCloseBirthdayModal = () => {
    setBirthdayModalVisible(false);
  };

  const handleCloseEventModal = () => {
    setEventModalVisible(false);
  };

  return (
      <div className="p-6">
        <AddMediaCardModal
            isVisible={isMediaModalVisible}
            onClose={handleCloseMediaModal}
        />
        <AddBirthdayCardModal
            isVisible={isBirthdayModalVisible}
            onClose={handleCloseBirthdayModal}
        />
        <AddEventCardModal
            isVisible={isEventModalVisible}
            onClose={handleCloseEventModal}
        />
        <h1 className="text-2xl font-bold text-blue-800 gap-2 p-1 text-center">Add Card To Queue</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Image or video */}
          <div onClick={handleMediaButtonClick} className="w-30vw" style={{ height: '30vh' }}>
            <div className="h-full p-4 border-4 rounded bg-[url('/Image.svg')]" style={{ backgroundImage: 'url(http://localhost:5173/Image.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
          {/* Add Birthday Post */}
          <div onClick={handleBirthdayButtonClick} className="w-30vw" style={{ height: '30vh' }}>
            <div className="h-full p-4 border-4 rounded bg-[url('/Birthday.svg')]" style={{ backgroundImage: 'url(http://localhost:5173/Birthday.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
          {/* Add Event */}
          <div onClick={handleEventButtonClick} className="w-30vw" style={{ height: '30vh' }}>
            <div className="h-full p-4 border-4 rounded bg-[url('/Event.svg')]" style={{ backgroundImage: 'url(http://localhost:5173/Event.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </div>
  );
};

export default AddPost;