import AddPost from "../components/dashboard/AddPost";

const DashBoardPage = () => {
  return (
    <div>
      <div className="h-40 w-full bg-red-400">
        <h1>DashBoard Page | HEADER GOES HERE</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        <div className="bg-slate-300">Now showing</div>
        <div className="bg-slate-300"></div>
        <div className="bg-slate-300">
          <AddPost />
        </div>
        <div className="bg-slate-300">Make Announcement</div>
      </div>
    </div>
  );
};

export default DashBoardPage;
