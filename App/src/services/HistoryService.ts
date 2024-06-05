import axios from "axios";

const HistoryService = (() => {
  const apiEndpoints = {
    History: "http://localhost:5017/api/History",
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
    getAllHistories,
  };
})();

export default HistoryService;
