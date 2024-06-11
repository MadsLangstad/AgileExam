// app-service.ts

import axios from "axios";
import {
  Queue,
  MediaCard,
  BirthdayCard,
  EventCard,
} from "../components/new-type";

const QueueService = (() => {
  const apiEndpoints = {
    Queue: "http://localhost:5017/api/Queue",
    MediaCard: "http://localhost:5017/api/MediaCard",
    History: "http://localhost:5017/api/History",
    BirthdayCard: "http://localhost:5017/api/BirthdayCard",
    EventCard: "http://localhost:5017/api/EventCard",
  };

  const getAllQueues = async (): Promise<Queue[]> => {
    try {
      console.log(`Fetching all queues from ${apiEndpoints.Queue}`);
      const result = await axios.get<Queue[]>(apiEndpoints.Queue);
      console.log("API response for getAllQueues:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error in getting all queues", error);
      throw error;
    }
  };

  const getMediaCardById = async (id: number): Promise<MediaCard> => {
    try {
      const result = await axios.get<MediaCard>(
        `${apiEndpoints.MediaCard}/${id}`
      );
      return result.data;
    } catch (error) {
      console.error(`Error in getting media card by id ${id}`, error);
      throw error;
    }
  };

  const getBirthdayCardById = async (id: number): Promise<BirthdayCard> => {
    try {
      const result = await axios.get<BirthdayCard>(
        `${apiEndpoints.BirthdayCard}/${id}`
      );
      return result.data;
    } catch (error) {
      console.error(`Error in getting birthday card by id ${id}`, error);
      throw error;
    }
  };

  const getEventCardById = async (id: number): Promise<EventCard> => {
    try {
      const result = await axios.get<EventCard>(
        `${apiEndpoints.EventCard}/${id}`
      );
      return result.data;
    } catch (error) {
      console.error(`Error in getting event card by id ${id}`, error);
      throw error;
    }
  };

  const getAllHistories = async (): Promise<History[]> => {
    try {
      const result = await axios.get<History[]>(apiEndpoints.History);
      return result.data;
    } catch (error) {
      console.error("Error in getting all histories", error);
      throw error;
    }
  };

  return {
    getAllQueues,
    getMediaCardById,
    getAllHistories,
    getEventCardById,
    getBirthdayCardById,
  };
})();

export default QueueService;
