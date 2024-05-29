import AddPost from "../components/dashboard/AddPost";
import AnnouncementComponent from "../components/dashboard/AnnouncementComponent";
import Navbar from "../components/dashboard/Navbar";

const DashBoardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        <div className="bg-slate-300">Now showing</div>
        <div className="bg-slate-300"></div>
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
