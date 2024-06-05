import React, { useEffect, useState } from "react";
import HistoryService from "../services/HistoryService";
import { IHistory } from "../interfaces/IHistory";
import HistoryCard from "../components/HistoryCard";
import Navbar from "../components/dashboard/Navbar";

const HistoryPage: React.FC = () => {
  const [histories, setHistories] = useState<IHistory[]>([]);

  useEffect(() => {
    const fetchHistories = async () => {
      const data = await HistoryService.getAllHistories();
      setHistories(data);
    };

    fetchHistories();
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-50">
      <Navbar />
      <h1 className="flex justify-center text-3xl text-blue-800 font-bold mt-10 pb-16">
        History
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 bg-slate-50">
          {histories.map((history) => (
            <HistoryCard key={history.historyId} history={history} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
