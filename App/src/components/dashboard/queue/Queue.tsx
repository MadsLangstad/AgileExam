import { useState, useEffect } from "react";
import { CardProps } from "./type";
import Queslot from "./Queslot";
import MediaCardService from "../../../services/MediaCardService";

const Queue: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await MediaCardService.getAllMediaCards();
      console.log("Fetched data:", data);
      const formattedData: CardProps[] = data.map((item: any) => ({
        type: "media",
        mediaCardId: item.mediaCardId,
        title: item.url,
        imgUrl: item.url,
      }));
      setCards(formattedData);
    };
    fetchCards();
  }, []);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="queue flex h-full w-full justify-center items-center gap-4">
      <button
        className="text-blue-800 font-bold text-5xl"
        onClick={prev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      {visibleCards.map((card, index) => (
        <Queslot key={card.mediaCardId} card={card} />
      ))}
      <button
        className="text-blue-800 font-bold text-5xl"
        onClick={next}
        disabled={currentIndex >= cards.length - 3}
      >
        &gt;
      </button>
    </div>
  );
};

export default Queue;
