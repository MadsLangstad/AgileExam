import { MediaCardProps } from "./type";

const MediaCard: React.FC<MediaCardProps> = ({ title, image }) => {
  return (
    <div className="media h-[500px] w-[450px] bg-red-400 flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      <div className="flex-1">
        <img src={image} alt={title} className="h-full w-full object-center" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MediaCard;
