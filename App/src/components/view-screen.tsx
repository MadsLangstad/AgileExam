import { useState, useEffect } from "react";
import QueueService from "../services/app-service";
import { Queue } from "./type";
import NewMediaCard from "./media-card";
import NewBirthdayCard from "./birthday-card";
import NewEventCard from "./event-card";

const ViewScreen: React.FC<{ onImageChange: (image: string) => void }> = ({
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<Queue[]>([]);
  const baseUrl = "http://localhost:5017";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const queueData = await QueueService.getAllQueues();
        console.log("Fetched queue data:", queueData);

        const formattedData = await Promise.all(
          queueData.map(async (queueItem) => {
            if (queueItem.mediaCardId) {
              const mediaCard = await QueueService.getMediaCardById(
                queueItem.mediaCardId
              );
              return { ...queueItem, mediaCard };
            } else if (queueItem.birthdayCardId) {
              const birthdayCard = await QueueService.getBirthdayCardById(
                queueItem.birthdayCardId
              );
              return { ...queueItem, birthdayCard };
            } else if (queueItem.eventCardId) {
              const eventCard = await QueueService.getEventCardById(
                queueItem.eventCardId
              );
              return { ...queueItem, eventCard };
            }
            return queueItem;
          })
        );

        console.log("Formatted data:", formattedData);
        setCards(formattedData);
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
      const currentCard = cards[currentIndex];
      if (currentCard.mediaCard) {
        onImageChange(`${baseUrl}${currentCard.mediaCard.url}`);
      }
    }
  }, [currentIndex, cards, onImageChange]);

  const currentCard = cards[currentIndex];

  if (!currentCard) {
    return <p>No media available</p>;
  }

  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center">
      {currentCard.mediaCardId && currentCard.mediaCard && (
        <NewMediaCard {...currentCard.mediaCard} />
      )}
      {currentCard.birthdayCardId && currentCard.birthdayCard && (
        <NewBirthdayCard {...currentCard.birthdayCard} />
      )}
      {currentCard.eventCardId && currentCard.eventCard && (
        <NewEventCard {...currentCard.eventCard} />
      )}
    </div>
  );
};

export default ViewScreen;
