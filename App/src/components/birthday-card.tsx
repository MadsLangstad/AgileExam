import { BirthdayCardProps } from "./type";

const BirthdayCard: React.FC<BirthdayCardProps> = ({ title, imgUrl, text }) => {
  return (
    <div className="birthday flex justify-center items-center h-[500px] w-[450px] bg-blue-400 rounded-md hover:scale-110 transition-all duration-300">
      <div className="flex-1 p-4">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex-1 bg-green-400 p-4">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
