import axios from "axios";

const AppService = (() => {
  const apiEndpoints = {
    Queue: "http://localhost:5017/api/Queue",
    MediaCard: "http://localhost:5017/api/MediaCard",
    History: "http://localhost:5017/api/History",
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

  const getAllHistories = async () => {
    try {
      const result = await axios.get(apiEndpoints.History);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error("Error in getting all histories", error);
    }
  };

  return {
    getAllQueues,
    getMediaCardById,
    getAllHistories,
  };
})();

export default AppService;
