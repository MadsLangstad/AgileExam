import { FC, ReactNode, useState, createContext } from "react";
import { IMediaCard } from "../interfaces/IMediaCard.ts";
import { IMediaCardContext } from "../interfaces/IMediaCardContext.ts";

export const MediaCardContext = createContext<IMediaCardContext | null>(null);

interface Props {
  children: ReactNode;
}

export const MediaCardProvider: FC<Props> = ({ children }) => {
  const [mediaCards, setMediaCard] = useState<IMediaCard[]>([]);

  const addMediaCard = (mediaCard: IMediaCard) => {
    setMediaCard((prevMediaCards) => [...prevMediaCards, mediaCard]);
  };

  const updateMediaCard = (mediaCard: IMediaCard) => {
    setMediaCard((prevMediaCard) =>
      prevMediaCard.map((prevMediaCard) =>
        prevMediaCard.id === mediaCard.id ? mediaCard : prevMediaCard,
      ),
    );
  };

  const deleteMediaCard = (id: number) => {
    setMediaCard((prevMediaCard) =>
      prevMediaCard.filter((mediaCard) => mediaCard.id !== id),
    );
  };

  return (
    <MediaCardContext.Provider
      value={{
        mediaCards,
        addMediaCard,
        updateMediaCard,
        deleteMediaCard,
      }}
    >
      {children}
    </MediaCardContext.Provider>
  );
};
