import { useNavigate } from "react-router-dom";
import CardPage from "./CardPage";

const DashBoardPage = () => {
    const navigate = useNavigate();

    const handleNowShowingClick = () => {
        navigate("/now-showing"); // Replace with your actual route
    };

    return (
        <div>
            <div className="h-40 w-full bg-red-400">
                <h1>DashBoard Page | HEADER GOES HERE</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-100 w-100">
                <div className="bg-gray-200">
                    <p>Now showing</p>
                    <button
                        className="w-120 h-auto"
                        onClick={handleNowShowingClick}
                        style={{ border: "none", padding: 0, background: "none" }}
                    >
                        <CardPage />
                    </button>
                </div>
                <div className="bg-gray-200">Queue</div>
                <div className="bg-gray-200">Add new post</div>
                <div className="bg-gray-200">Make Announcement</div>
            </div>
        </div>
    );
};

export default DashBoardPage;
