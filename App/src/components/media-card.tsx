import { MediaCardProps } from "./type";

const MediaCard: React.FC<MediaCardProps> = ({ imgUrl, fileType }) => {
  console.log("MediaCard URL: " + imgUrl);

  const baseUrl = "http://localhost:5017";
  const fullUrl = `${baseUrl}${imgUrl}`;
  const isVideo = fileType.startsWith("video/");

  const validTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
    "image/svg+xml",
    "image/tiff",
    "image/x-icon",
    "video/mp4",
    "video/mpeg",
    "video/quicktime",
    "video/x-msvideo",
    "video/x-matroska",
    "video/webm",
    "video/ogg",
    "video/3gpp",
    "video/x-flv",
  ];

  if (!validTypes.includes(fileType)) {
    return <div>Unsupported media type</div>;
  }

  return (
    <div className="media flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      {isVideo ? (
        <video className="h-[280px] w-[350px]" controls>
          <source src={fullUrl} type={fileType} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="h-[280px] w-[350px]" src={fullUrl} alt={"media"} />
      )}
    </div>
  );
};

export default MediaCard;
