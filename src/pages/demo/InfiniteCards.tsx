import PhotoCard from "../../components/pages/demo/PhotoCard";
import { PhotoList } from "../../components/pages/demo/PhotoList";

const InfiniteCards = () => {
  return (
    <div>
      <PhotoList ItemComponent={PhotoCard} />
    </div>
  );
};

export default InfiniteCards;
