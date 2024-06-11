import AddPost from "../components/add-post";
import Navbar from "../components/navbar";
import { useState } from "react";
import ViewScreen from "../components/view-screen";
import QueueComponent from "../components/queue-component";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const navigate = useNavigate();

  const navigateToFullScreen = () => {
    navigate("/fullscreen");
  };

  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="relative flex-1 overflow-y-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="bg-slate-300 flex justify-center items-center flex-col">
            <div
              className="h-full w-full flex justify-center items-center"
              onClick={navigateToFullScreen}
            >
              <div className="h-[400px] w-[500px]">
                <h1 className="text-3xl text-blue-800 font-bold absolute top-4">
                  Now showing
                </h1>
                <ViewScreen onImageChange={setCurrentImage} />
              </div>
            </div>
          </div>
          <div className="bg-slate-300 flex justify-center items-center">
            <div className="h-[400px] w-[500px]">
              <h1 className="text-3xl text-blue-800 font-bold absolute top-4">
                Queue
              </h1>
              <QueueComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none h-1/2">
        <AddPost />
      </div>
      <div style={{ display: "none" }}>
        <ViewScreen onImageChange={setCurrentImage} />
      </div>
    </div>
  );
};

export default DashBoardPage;
