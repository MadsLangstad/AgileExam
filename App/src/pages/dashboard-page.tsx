import AddPost from "../components/add-post";
import Navbar from "../components/navbar";
import { useState } from "react";
import NowShowing from "../components/now-showing";
import ViewScreen from "../components/view-screen";
import Queue from "../components/queue";

const DashBoardPage = () => {
  const [currentImage, setCurrentImage] = useState<string>("");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
          <div className="bg-slate-300">
            <NowShowing currentImage={currentImage} />
          </div>
          <div className="bg-slate-300">
            <Queue />
          </div>
          <div className=" flex items-center justify-center">
            <AddPost />
          </div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <ViewScreen onImageChange={setCurrentImage} />
      </div>
    </div>
  );
};

export default DashBoardPage;
