import { useEffect, useState } from "react";
import { IHistory } from "../interfaces/IHistory";
import QueueService from "../services/QueueService";
import { IQueue } from "../interfaces/IQueue";

interface HistoryCardProps {
  history: IHistory;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ history }) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaCard = async () => {
      const queue = await QueueService.getAllQueues();
      const queueItem = queue.find(
        (q: IQueue) => q.queueId === history.queueId
      );

      if (queueItem && queueItem.mediaCardId) {
        const mediaCard = await QueueService.getMediaCardById(
          queueItem.mediaCardId
        );
        setImgUrl(mediaCard.url);
      }
    };

    fetchMediaCard();
  }, [history.queueId]);

  return (
    <div className="h-[380px] w-[300px] bg-white flex flex-col justify-center items-center rounded-md">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-blue-800 font-bold text-xl">{history.title}</h3>
        <p className="text-slate-600 text-sm">{history.description}</p>
      </div>
      {imgUrl ? (
        <img
          className="h-[200px] w-[250px] border-2 border-slate-100 rounded-md mt-4"
          src={`http://localhost:5017${imgUrl}`}
          alt={"Media Card"}
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex justify-between items-center w-[300px] p-6">
        <div>
          <img height={46} width={46} src="/public/KPMG_logo_blue.png" alt="" />
        </div>
        <div className="flex gap-1 justify-center items-center text-sm text-slate-600 font-semibold ">
          <img src="/date_icon.svg" alt="" />
          <p>{new Date(history.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
