export interface MediaCardProps {
  type: "media";
  title: string;
  image: string;
}
export interface BirthdayCardProps {
  type: "birthday";
  title: string;
  image: string;
  text: string;
}

export type CardProps = MediaCardProps | BirthdayCardProps;
