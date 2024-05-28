import { FC, ReactNode, useState, createContext } from "react";
import { IWeatherCard } from "../interfaces/IWeatherCard.ts";
import { IWeatherCardContext } from "../interfaces/IWeatherCardContext.ts";

export const WeatherCardContext = createContext<IWeatherCardContext | null>(
  null,
);

interface Props {
  children: ReactNode;
}

export const WeatherCardProvider: FC<Props> = ({ children }) => {
  const [weatherCards, setWeatherCard] = useState<IWeatherCard[]>([]);

  const addWeatherCard = (weatherCard: IWeatherCard) => {
    setWeatherCard((prevWeatherCards) => [...prevWeatherCards, weatherCard]);
  };

  const updateWeatherCard = (weatherCard: IWeatherCard) => {
    setWeatherCard((prevWeatherCard) =>
      prevWeatherCard.map((prevWeatherCard) =>
        prevWeatherCard.id === weatherCard.id ? weatherCard : prevWeatherCard,
      ),
    );
  };

  const deleteWeatherCard = (id: number) => {
    setWeatherCard((prevWeatherCard) =>
      prevWeatherCard.filter((weatherCard) => weatherCard.id !== id),
    );
  };

  return (
    <WeatherCardContext.Provider
      value={{
        weatherCards,
        addWeatherCard,
        updateWeatherCard,
        deleteWeatherCard,
      }}
    >
      {children}
    </WeatherCardContext.Provider>
  );
};
