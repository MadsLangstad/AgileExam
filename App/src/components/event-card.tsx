import React from "react";
import { EventCard } from "./type";

interface EventCardProps extends EventCard {}

const NewEventCard: React.FC<EventCardProps> = ({
  title,
  description,
  location,
  date,
  time,
  duration,
}) => {
  return (
    <div className="event flex justify-center items-center h-full w-full bg-yellow-400 rounded-md hover:scale-110 transition-all duration-300">
      <div className="flex-1 p-4">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{location}</p>
        <p>{date}</p>
        <p>{time.toLocaleTimeString()}</p>
        <p>{duration} minutes</p>
      </div>
    </div>
  );
};

export default NewEventCard;
