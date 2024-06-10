import AddPost from "../components/add-post";
import Navbar from "../components/navbar";
import { useState } from "react";
import NowShowing from "../components/now-showing";
import ViewScreen from "../components/view-screen";
import Queue from "../components/queue";

const DashBoardPage = () => {
    const [currentImage, setCurrentImage] = useState<string>("");

    return (
        <div className="h-screen flex flex-col">
            <div>
                <Navbar/>
            </div>
            <div className="relative flex-1 overflow-y-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    <div className="bg-slate-300">
                        <NowShowing currentImage={currentImage}/>
                    </div>
                    <div className="bg-slate-300">
                        <Queue/>
                    </div>
                </div>
            </div>
            <div className="flex-none h-1/2">
                <AddPost/>
            </div>
            <div style={{display: "none"}}>
                <ViewScreen onImageChange={setCurrentImage}/>
            </div>
        </div>
    );
};

export default DashBoardPage;