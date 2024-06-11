// import { useState, useEffect } from "react";
// import { CardProps } from "./type";
// import Queslot from "./queslot";
// import QueueService from "../services/app-service";
// import { QueueProps } from "./type";

// const Queue: React.FC = () => {
//   const [cards, setCards] = useState<CardProps[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchCards = async () => {
//       const queueData = await QueueService.getAllQueues();
//       console.log("Fetched queue data:", queueData);

//       const formattedData: CardProps[] = await Promise.all(
//         queueData.map(async (queueItem: QueueProps) => {
//           if (queueItem.mediaCardId) {
//             const mediaCard = await QueueService.getMediaCardById(
//               queueItem.mediaCardId
//             );
//             return {
//               type: "media",
//               queueId: queueItem.queueId,
//               title: mediaCard.url,
//               imgUrl: mediaCard.url,
//               fileType: mediaCard.fileType,
//             };
//           } else {
//             return null;
//           }
//         })
//       );

//       setCards(formattedData.filter((item) => item !== null));
//     };

//     fetchCards();
//   }, []);

//   const prev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const next = () => {
//     if (currentIndex < cards.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const visibleCards = cards.slice(currentIndex, currentIndex + 3);

//   return (
//     <div className="queue flex flex-col h-full w-full justify-center items-center gap-4">
//       <div>
//         <h2 className="text-2xl font-bold text-blue-800">Queue</h2>
//       </div>
//       <div className="flex gap-4">
//         <button
//           className="text-blue-800 font-bold text-5xl"
//           onClick={prev}
//           disabled={currentIndex === 0}
//         >
//           &lt;
//         </button>
//         {visibleCards.map((card) => (
//           <Queslot key={card.mediaCardId} card={card} />
//         ))}
//         <button
//           className="text-blue-800 font-bold text-5xl"
//           onClick={next}
//           disabled={currentIndex >= cards.length - 3}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Queue;
