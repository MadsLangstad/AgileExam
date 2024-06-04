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

export type CardProps = MediaCardProps | BirthdayCardProps;
