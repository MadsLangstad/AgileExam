// BirthdayCard.tsx

import React from "react";
import { BirthdayCard } from "./new-type";

interface BirthdayCardProps extends BirthdayCard {}

const NewBirthdayCard: React.FC<BirthdayCardProps> = ({
  title,
  content,
  imageUrl,
}) => {
  return (
    <div className="birthday flex justify-center items-center h-[500px] w-[450px] bg-blue-400 rounded-md hover:scale-110 transition-all duration-300">
      <div className="flex-1 p-4">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="flex-1 bg-green-400 p-4">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NewBirthdayCard;
