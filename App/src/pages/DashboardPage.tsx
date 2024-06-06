import AddPost from "../components/dashboard/AddPost";
import AnnouncementComponent from "../components/dashboard/AnnouncementComponent";
import Navbar from "../components/dashboard/Navbar";
import Queue from "../components/dashboard/queue/Queue";
import { useRef, useState } from "react";
import NowShowing from "../components/dashboard/NowShowing";
import ViewScreen from "../components/ViewScreen";

const DashBoardPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
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
          <div className="bg-slate-300 flex items-center justify-center">
            <AnnouncementComponent targetRef={targetRef} />
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <ViewScreen onImageChange={setCurrentImage} />
      </div>
    </div>
  );
};

export default DashBoardPage;
