import React from "react";
import { MediaCard } from "./type";
import CardOverlay from "./card-overlay";
import QueueService from "../services/app-service";

interface MediaCardProps extends MediaCard {
  mediaCardId: number; // Ensure this is included
  handleDeleteCard: (mediaCardId: number) => void;
}

const NewMediaCard: React.FC<MediaCardProps> = ({
  url,
  fileType,
  mediaCardId,
  handleDeleteCard
}) => {

  const isVideo = fileType?.startsWith("video/");
  const baseUrl = "http://localhost:5017";
  const fullUrl = `${baseUrl}${url}`;
  console.log("MediaCard URL: " + fullUrl);

  const handleDelete = async () => {
    try {
      await QueueService.deleteMediaCard(mediaCardId);
      console.log("Deleted Media Card");
      handleDeleteCard(mediaCardId);
    } catch (error) {
      console.error("Error deleting Media Card", error);
    }
  };

  return (
    <div className="relative group media flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      {isVideo ? (
        <video className="h-full w-full" controls>
          <source src={fullUrl} type={fileType} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="h-full w-full" src={fullUrl} alt="media" />
      )}
      <CardOverlay onDelete={handleDelete} />
    </div>
  );
};

export default NewMediaCard;
