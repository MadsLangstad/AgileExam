import { IMediaCard } from "./IMediaCard.ts";
export interface IMediaCardContext {
  mediaCards: IMediaCard[];
  addMediaCard: (mediaCard: IMediaCard) => void;
  updateMediaCard: (mediaCard: IMediaCard) => void;
  deleteMediaCard: (id: number) => void;
}
