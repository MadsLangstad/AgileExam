import MediaCard from "./MediaCard";
import BirthdayCard from "./BirthdayCard";
import { CardProps } from "./type";

interface QueslotProps {
  card: CardProps;
}

const Queslot: React.FC<QueslotProps> = ({ card }) => {
  switch (card.type) {
    case "media":
      return <MediaCard {...card} />;
    case "birthday":
      return <BirthdayCard {...card} />;
    default:
      return null;
  }
};

export default Queslot;
