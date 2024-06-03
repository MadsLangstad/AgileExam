import { MediaCardProps } from "./type";

const MediaCard: React.FC<MediaCardProps> = ({ imgUrl }) => {
  console.log("MediaCard URL: " + imgUrl);

  const baseUrl = "http://localhost:5017";
  const fullUrl = `${baseUrl}${imgUrl}`;

  return (
    <div className="media flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      <img className="h-[280px] w-[350px]" src={fullUrl} alt={"alt tag"} />
    </div>
  );
};

export default MediaCard;
