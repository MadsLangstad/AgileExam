import React from "react";
import { EventCard } from "./type";
import CardOverlay from "./card-overlay";
import QueueService from "../services/app-service";

interface EventCardProps extends EventCard {
  handleDeleteCard: (eventCardId: number) => void;
}

const NewEventCard: React.FC<EventCardProps> = ({
  eventCardId,
  title,
  description,
  location,
  date,
  time,
  duration,
  handleDeleteCard,
}) => {

  const handleDelete = async () => {
    try {
      await QueueService.deleteEventCard(eventCardId);
      console.log("Deleted Event Card");
      handleDeleteCard(eventCardId);
    } catch (error) {
      console.error("Error deleting Event Card", error);
    }
  };

  const formattedTime = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="relative group event flex justify-center items-center h-full w-full bg-white border border-blue-700 rounded-md p-6">
      <CardOverlay onDelete={handleDelete} />
      <div className="flex-1 text-left">
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-700 mr-4">{title}</h2>
          <img src="/public/KPMG_logo_blue.png" alt="KPMG Logo" className="h-10" />
        </div>
        <div className="flex items-center mb-2">
          <img src="/public/location.png" alt="" />
          <p className="pl-2 text-xl font-semibold text-blue-700">{location}</p>
        </div>
        <div className="flex items-center mb-2">
          <img src="/public/bx_party.png" alt="" />
          <p className="pl-2 text-xl font-semibold text-blue-700">{date}</p>
        </div>
        <div className="flex items-center mb-2">
          <img src="/public/carbon_time.png" alt="" />
          <p className="pl-2 text-xl font-semibold text-blue-700">{formattedTime} | {duration} Hours</p>
        </div>
        <div className="border-t border-2 border-blue-700 w-5/6"></div>
        <div className="mt-4 pt-4">
          <p className="pl-2 text-xl font-semibold text-blue-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewEventCard;
