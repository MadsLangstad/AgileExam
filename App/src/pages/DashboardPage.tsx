const DashBoardPage = () => {
  return (
    <div>
      <div className="h-40 w-full bg-red-400">
        <h1>DashBoard Page | HEADER GOES HERE</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        <div className="bg-gray-200">Now showing</div>
        <div className="bg-gray-200">Queue</div>
        <div className="bg-gray-200">Add new post</div>
        <div className="bg-gray-200">Make Announcement</div>
      </div>
    </div>
  );
};

export default DashBoardPage;
