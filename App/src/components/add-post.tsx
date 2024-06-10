import { useState } from "react";
import UploadModal from "./upload-modal";
import AddBirthdayCardModal from "./add-birthday-card-modal";

const AddPost = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBirthdayModalVisible, setBirthdayModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleBirthdayButtonClick = () => {
    setBirthdayModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseBirthdayModal = () => {
    setBirthdayModalVisible(false);
  };

  return (
    <div className="p-6">
      <UploadModal isVisible={isModalVisible} onClose={handleCloseModal} />
      <AddBirthdayCardModal
        isVisible={isBirthdayModalVisible}
        onClose={handleCloseBirthdayModal}
      />
      <div className="flex gap-4 justify-center items-center mb-4">
        <h1 className=" text-2xl font-bold text-blue-800">Add To Queue</h1>
        <div className="bg-blue-800 text-white rounded-full w-8 h-8 bg-[url('/tooltip_icon.svg')] bg-contain bg-no-repeat bg-center"></div>
      </div>
      <div className="flex flex-col gap-4 items-center w-full">
        {/* Image or video */}
        <div className={"w-96 bg-white border border-gray-300 rounded-md"}>
          <button
            className="flex items-center h-20 w-full rounded-md"
            onClick={handleButtonClick}
          >
            <div
              className={
                "flex-none h-12 w-12 bg-[url('/videoIcon.svg')] bg-contain bg-no-repeat bg-center ml-4"
              }
            ></div>
            <p
              className={
                "flex-grow mr-8 text-center text-blue-800 text-lg font-medium"
              }
            >
              Image or video
            </p>
          </button>
        </div>
        <div className={"w-96 bg-white border border-gray-300 rounded-md"}>
          <button
            className="flex items-center h-20 w-full rounded-md"
            onClick={handleBirthdayButtonClick}
          >
            <div className="flex-none h-12 w-12 bg-[url('/videoIcon.svg')] bg-contain bg-no-repeat bg-center ml-4"></div>
            <p className="flex-grow mr-8 text-center text-blue-800 text-lg font-medium">
              Add Birthday Post
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
