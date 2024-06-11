import { MediaCardProps } from "./type";

const MediaCard: React.FC<MediaCardProps> = ({ imgUrl, fileType }) => {
  console.log("MediaCard URL: " + imgUrl);

  const baseUrl = "http://localhost:5017";
  const fullUrl = `${baseUrl}${imgUrl}`;
  const isVideo = fileType.startsWith("video/");

  return (
    <div className="media flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      {isVideo ? (
        <video className="h-[280px] w-[350px]" controls>
          <source src={fullUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="h-[280px] w-[350px]" src={fullUrl} alt={"media"} />
      )}
    </div>
  );
};

export default MediaCard;
