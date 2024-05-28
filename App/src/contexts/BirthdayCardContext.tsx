import { FC, ReactNode, useState, createContext } from "react";
import { IBirthdayCard } from "../interfaces/IBirthdayCard.ts";
import { IBirthdayCardContext } from "../interfaces/IBirthdayCardContext.ts";

export const BirthdayCardContext = createContext<IBirthdayCardContext | null>(
  null,
);

interface Props {
  children: ReactNode;
}

export const BirthdayCardProvider: FC<Props> = ({ children }) => {
  const [birthdayCards, setBirthdayCard] = useState<IBirthdayCard[]>([]);

  const addBirthdayCard = (birthdayCard: IBirthdayCard) => {
    setBirthdayCard((prevBirthdayCards) => [
      ...prevBirthdayCards,
      birthdayCard,
    ]);
  };

  const updateBirthdayCard = (BirthdayCard: IBirthdayCard) => {
    setBirthdayCard((prevBirthdayCard) =>
      prevBirthdayCard.map((prevBirthdayCard) =>
        prevBirthdayCard.id === BirthdayCard.id
          ? BirthdayCard
          : prevBirthdayCard,
      ),
    );
  };

  const deleteBirthdayCard = (id: number) => {
    setBirthdayCard((prevBirthdayCard) =>
      prevBirthdayCard.filter((birthdayCard) => birthdayCard.id !== id),
    );
  };

  return (
    <BirthdayCardContext.Provider
      value={{
        birthdayCards,
        addBirthdayCard,
        updateBirthdayCard,
        deleteBirthdayCard,
      }}
    >
      {children}
    </BirthdayCardContext.Provider>
  );
};
