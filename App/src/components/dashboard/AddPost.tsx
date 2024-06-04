import { useState } from "react";
import UploadModal from "./UploadModal";

const AddPost = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="p-6">
      <UploadModal isVisible={isModalVisible} onClose={handleCloseModal} />
      <div className="flex gap-4 justify-center items-center mb-4">
        <h1 className=" text-2xl font-bold text-blue-800">Add new card</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <button
            className="h-20 w-20 rounded-md bg-[url('../../../public/addImageIcon.png')] bg-contain bg-no-repeat bg-center"
            onClick={handleButtonClick}
          ></button>
          <div className="text-center">
            <p className="text-sm text-gray-500">Add Image/Video</p>
          </div>
        </div>
        <div className="">
          <button className="h-20 w-20 rounded-md bg-[url('../../../public/birthdayIcon.png')] bg-contain bg-no-repeat bg-center"></button>
          <div className="text-center">
            <p className="text-sm text-gray-500">Add Birthday Post</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
