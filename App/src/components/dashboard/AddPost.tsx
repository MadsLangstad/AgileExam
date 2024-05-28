const AddPost = () => {
  const handleMediaClick = () => {
    // Add function to add media
    console.log("Media button clicked");
  };

  const handleBirthdayClick = () => {
    // Add function to add birthday post
    console.log("Birthday button clicked");
  };
  return (
    <div className="p-6">
      <div className="flex gap-4 justify-center items-center">
        <h1 className="font-semibold text-5xl text-blue-700">Add To Queue</h1>
        <div className="h-10 w-10 bg-[url('/tooltip_icon.svg')] bg-contain bg-no-repeat bg-center"></div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="mt-20">
          <button
            className="h-36 w-52 rounded-md bg-[url('/img_video_icon.svg')] bg-contain bg-no-repeat bg-center"
            onClick={handleMediaClick}
          ></button>
          <div className="text-center">
            <p className="text-blue-600 text-xl">Add Image/Video</p>
          </div>
        </div>
        <div className="mt-20">
          <button
            className="h-36 w-52 rounded-md bg-[url('/birthday_icon.svg')] bg-contain bg-no-repeat bg-center"
            onClick={handleBirthdayClick}
          ></button>
          <div className="text-center">
            <p className="text-blue-600 text-xl">Add Birthday Post</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
