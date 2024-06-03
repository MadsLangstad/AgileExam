import { useNavigate } from "react-router-dom";
import CardPage from "./CardPage";
import AddPost from "../components/dashboard/AddPost";
import AnnouncementComponent from "../components/dashboard/AnnouncementComponent";
import Navbar from "../components/dashboard/Navbar";
import Queue from "../components/dashboard/queue/Queue";

const DashBoardPage = () => {
  const navigate = useNavigate();

  const handleNowShowingClick = () => {
    navigate("/now-showing");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        <div className="bg-slate-300">
          <p>Now showing</p>
          <button
            className="w-120 h-auto"
            onClick={handleNowShowingClick}
            style={{ border: "none", padding: 0, background: "none" }}
          >
            <CardPage />
          </button>
        </div>
        <div className="bg-slate-300">
          <Queue />
        </div>
        <div className="bg-slate-300 flex items-center justify-center">
          <AddPost />
        </div>
        <div className="bg-slate-300 flex items-center justify-center">
          <AnnouncementComponent />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
