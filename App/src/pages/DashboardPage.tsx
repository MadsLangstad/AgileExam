import { useNavigate } from "react-router-dom";
import CardPage from "./CardPage";
import AddPost from "../components/dashboard/AddPost";
import AnnouncementComponent from "../components/dashboard/AnnouncementComponent";
import Navbar from "../components/dashboard/Navbar";
import Queue from "../components/dashboard/queue/Queue";
import { CardProps } from "../components/dashboard/queue/type";

const DashBoardPage = () => {
  const navigate = useNavigate();
  // PLACE HOLDER DATA -> Replace with actual data from the API
  const cards: CardProps[] = [
    {
      type: "media",
      title: "Drikk Vann Card",
      image: "/DrikkVannCard.png",
    },
    {
      type: "media",
      title: "m_title_2",
      image: "url2",
    },
    {
      type: "media",
      title: "m_title_3",
      image: "url3",
    },
    {
      type: "birthday",
      title: "b_title_1",
      image: "ur4",
      text: "Hapy Birthday 1",
    },
    {
      type: "birthday",
      title: "b_title_2",
      image: "url",
      text: "Hapy Birthday 2",
    },
  ];

  const handleNowShowingClick = () => {
    navigate("/now-showing");
  };

  // Date of upload
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const currentDate = date + "." + month + "." + year;

  return (
    <>
      <Navbar />
      <div className={"h-screen p-2 bg-gray-100"}>
        <div className={"mb-2"}></div>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 h-full"}>
          <div className={" p-4 rounded-lg  flex flex-col"}>
            <p className={"text-xl text-blue-800 font-semibold mb-4"}>
              Now showing on screen
            </p>
            <button
              className={"w-full h-auto"}
              onClick={handleNowShowingClick}
              style={{ border: "none", padding: 0, background: "none" }}
            >
              <CardPage />
            </button>
            <div className="mt-4 text-blue-800">
              <p className={"font-semibold "}>Added by</p>
              <span>"Name Name" {currentDate}</span>
            </div>
          </div>
          <div className={"bg-white p-2 flex flex-col rounded-lg shadow"}>
            <p className={"text-xl text-blue-800 font-semibold mb-4"}>Queue</p>
            <Queue cards={cards} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify center">
            <AddPost />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center">
            <AnnouncementComponent />
            <div className={"flex mt-4 space-x-2"}>
              <button className={"w-8 h-8 bg-blue-500 rounded-full"}></button>
              <button className={"w-8 h-8 bg-green-500 rounded-full"}></button>
              <button className={"w-8 h-8 bg-purple-500 rounded-full"}></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
