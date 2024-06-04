import { MediaCardProps } from "./type";

const MediaCard: React.FC<MediaCardProps> = ({ title, image }) => {
  return (
    // w-full
    <div className="media h-[350px] w-2/4 bg-red-400 flex flex-col justify-center items-center rounded-md shadow-xl hover:scale-110 transition-all duration-300">
      <div className="flex-1 ">
        <img
          src={image}
          alt={title}
          className="h-[350px] object-center rounded"
          //style={{ height: "50vh" }}
        />
      </div>
      {/** 
      <div className="flex-1 flex justify-center items-center">
        <h2>{title}</h2>
      </div>
      */}
    </div>
  );
};

export default MediaCard;
