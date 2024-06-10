import { useState, useEffect } from "react";
import QueueService from "../services/app-service";
import { QueueProps } from "./type";

const ViewScreen: React.FC<{ onImageChange: (image: string) => void }> = ({
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<{ imgUrl: string }[]>([]);

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
              };
            } else {
              return null;
            }
          })
        );

        const filteredData = formattedData.filter((item) => item !== null);
        console.log("Formatted data:", filteredData);

        setCards(filteredData as { imgUrl: string }[]);
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

  const currentImg = `${baseUrl}${cards[currentIndex]?.imgUrl}`;

  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center">
      {currentImg ? (
        <img
          src={currentImg}
          className="object-cover w-full h-full"
          alt="Current Display"
        />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default ViewScreen;
