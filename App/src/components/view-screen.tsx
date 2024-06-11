import { useState, useEffect } from "react";
import QueueService from "../services/app-service";
import { QueueProps } from "./type";

const ViewScreen: React.FC<{ onImageChange: (image: string) => void }> = ({
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<{ imgUrl: string; fileType: string }[]>(
    []
  );

  const baseUrl = "http://localhost:5017";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const queueData = await QueueService.getAllQueues();
        console.log("Fetched queue data:", queueData);

        const formattedData = await Promise.all(
          queueData.map(async (queueItem: QueueProps) => {
            if (queueItem.mediaCardId) {
              const mediaCard = await QueueService.getMediaCardById(
                queueItem.mediaCardId
              );
              console.log("Fetched media card:", mediaCard);
              return {
                imgUrl: mediaCard.url,
                fileType: mediaCard.fileType,
              };
            } else {
              return null;
            }
          })
        );

        const filteredData = formattedData.filter((item) => item !== null);
        console.log("Formatted data:", filteredData);

        setCards(filteredData as { imgUrl: string; fileType: string }[]);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [cards.length]);

  useEffect(() => {
    if (cards.length > 0) {
      console.log("Current image URL:", cards[currentIndex]?.imgUrl);
      onImageChange(`${baseUrl}${cards[currentIndex]?.imgUrl}`);
    }
  }, [currentIndex, cards, onImageChange]);

  const currentMedia = cards[currentIndex];
  const fullUrl = currentMedia ? `${baseUrl}${currentMedia.imgUrl}` : null;
  const isVideo = currentMedia?.fileType.startsWith("video/");

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

  if (!validTypes.includes(currentMedia?.fileType || "")) {
    return <div>Unsupported media type</div>;
  }

  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center">
      {fullUrl ? (
        isVideo ? (
          <video className="object-cover w-full h-full" controls>
            <source src={fullUrl} type={currentMedia.fileType} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={fullUrl}
            className="object-cover w-full h-full"
            alt="Current Display"
          />
        )
      ) : (
        <p>No media available</p>
      )}
    </div>
  );
};

export default ViewScreen;
