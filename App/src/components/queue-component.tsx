// NewQueue.tsx

"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import QueueService from "../services/app-service";
import NewMediaCard from "./media-card";
import NewBirthdayCard from "./birthday-card";
import NewEventCard from "./event-card";
import { Queue } from "./type";

const QueueComponent: React.FC = () => {
  const [cards, setCards] = useState<Queue[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      console.log("Starting to fetch cards from QueueService...");

      try {
        const queueData = await QueueService.getAllQueues();
        console.log("Fetched queue data:", queueData);

        if (queueData.length === 0) {
          console.warn("No queues found");
        } else {
          console.log("Queue data received:", queueData);

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
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  console.log("Current state of cards:", cards);

  return (
    <div className="h-full w-full">
      <Carousel slide={false}>
        {cards.map((card) => (
          <div
            key={card.queueId}
            className="flex items-center justify-center h-full w-full"
          >
            {card.mediaCardId && card.mediaCard && (
              <NewMediaCard {...card.mediaCard} />
            )}
            {card.birthdayCardId && card.birthdayCard && (
              <NewBirthdayCard {...card.birthdayCard} />
            )}
            {card.eventCardId && card.eventCard && (
              <NewEventCard {...card.eventCard} />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default QueueComponent;
