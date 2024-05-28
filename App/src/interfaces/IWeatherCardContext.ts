import { IWeatherCard } from "./IWeatherCard.ts";
export interface IWeatherCardContext {
  weatherCards: IWeatherCard[];
  addWeatherCard: (weatherCard: IWeatherCard) => void;
  updateWeatherCard: (weatherCard: IWeatherCard) => void;
  deleteWeatherCard: (id: number) => void;
}
