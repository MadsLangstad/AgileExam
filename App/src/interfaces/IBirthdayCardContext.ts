import { IBirthdayCard } from "./IBirthdayCard.ts";
export interface IBirthdayCardContext {
  birthdayCards: IBirthdayCard[];
  addBirthdayCard: (birthdayCard: IBirthdayCard) => void;
  updateBirthdayCard: (birthdayCard: IBirthdayCard) => void;
  deleteBirthdayCard: (id: number) => void;
}
