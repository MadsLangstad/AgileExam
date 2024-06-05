import axios from "axios";

const QueueService = (() => {
  const apiEndpoints = {
    Queue: "http://localhost:5017/api/Queue",
    MediaCard: "http://localhost:5017/api/MediaCard",
  };

  const getAllQueues = async () => {
    try {
      const result = await axios.get(apiEndpoints.Queue);
      return result.data;
    } catch (error) {
      console.error("Error in getting all queues", error);
    }
  };

  const getMediaCardById = async (id: number) => {
    try {
      const result = await axios.get(`${apiEndpoints.MediaCard}/${id}`);
      return result.data;
    } catch (error) {
      console.error("Error in getting media card by id", error);
    }
  };

  return {
    getAllQueues,
    getMediaCardById,
  };
})();

export default QueueService;
