import React from "react";
import { BirthdayCard } from "./type";

interface BirthdayCardProps extends BirthdayCard {}

const NewBirthdayCard: React.FC<BirthdayCardProps> = ({
  title,
  content,
  imageUrl,
}) => {
  console.log("BirthdayCard URL: " + imageUrl);
  return (
    <div
      className={`birthday flex justify-center items-center h-full w-full bg-cover bg-no-repeat rounded-md hover:scale-110 transition-all duration-300`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white p-4 min h-[300px] w-[250px] flex justify-center items-center flex-col rounded-md">
        <h2 className="text-xl font-bold text-blue-400">{title}</h2>
        <p className="text-sm p-6">{content}</p>
      </div>
    </div>
  );
};

export default NewBirthdayCard;
