export interface MediaCardProps {
  type: "media";
  mediaCardId: number;
  title: string;
  imgUrl: string;
}

export interface BirthdayCardProps {
  mediaCardId: number;
  type: "birthday";
  title: string;
  imgUrl: string;
  text: string;
}

export interface IQueue {
  queueId: number;
  cardType: string;
  birthDayCardId: number;
  mediaCardId: number;
  startDate: Date;
  endDate: Date;
  duration: number;
}

export interface IHistory {
  historyId: number;
  queueId: number;
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
}

export type CardProps = MediaCardProps | BirthdayCardProps;
