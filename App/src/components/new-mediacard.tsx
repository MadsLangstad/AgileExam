// MediaCard.tsx

import React from "react";
import { MediaCard } from "./new-type";

interface MediaCardProps extends MediaCard {}

const NewMediaCard: React.FC<MediaCardProps> = ({ url, fileType }) => {
  const isVideo = fileType?.startsWith("video/");
  const baseUrl = "http://localhost:5017";
  const fullUrl = `${baseUrl}${url}`;
  console.log("MediaCard URL: " + fullUrl);

  return (
    <div className="media flex flex-col justify-center items-center rounded-md hover:scale-110 transition-all duration-300">
      {isVideo ? (
        <video className="h-[280px] w-[350px]" controls>
          <source src={fullUrl} type={fileType} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="h-[280px] w-[350px]" src={fullUrl} alt="media" />
      )}
    </div>
  );
};

export default NewMediaCard;
