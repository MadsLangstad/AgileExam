import { useState } from "react";
import UploadModal from "./UploadModal";
import AddBirthdayCardModal from "./AddBirthdayCardModal";

const AddPost = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBirthdayModalVisible, setBirthdayModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleBirthdayButtonClick = () => {
    setBirthdayModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseBirthdayModal = () => {
    setBirthdayModalVisible(false);
  }

  return (
    <div className="p-6">
      <UploadModal isVisible={isModalVisible} onClose={handleCloseModal} />
      <AddBirthdayCardModal isVisible={isBirthdayModalVisible} onClose={handleCloseBirthdayModal} />
      <div className="flex gap-4 justify-center items-center mb-4">
        <h1 className=" text-2xl font-bold text-blue-800">Add To Queue</h1>
        <div className="bg-blue-800 text-white rounded-full w-8 h-8 bg-[url('/tooltip_icon.svg')] bg-contain bg-no-repeat bg-center"></div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <button
            className="h-20 w-20 rounded-md bg-[url('/img_video_icon.svg')] bg-contain bg-no-repeat bg-center"
            onClick={handleButtonClick}
          ></button>
          <div className="text-center">
            <p className="text-sm text-gray-500">Add Image/Video</p>
          </div>
        </div>
        <div>
          <button
            className="h-20 w-20 rounded-md bg-[url('/birthday_icon.svg')] bg-contain bg-no-repeat bg-center"
            onClick={handleBirthdayButtonClick}
          ></button>
          <div className="text-center">
            <p className="text-sm text-gray-500">Add Birthday Post</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
