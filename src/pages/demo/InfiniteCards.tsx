import { useIntersectionObserver } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const PhotoCard = (props: { item: Photo }) => {
  const { item } = props;

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <div ref={ref} className="border border-gray-300 rounded-md">
      {entry?.isIntersecting && (
        <div className="flex flex-col w-52 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqpN0iIW5SKywvEkxjGAhuodqXkC06KJAKw&s"
            className=" h-52 object-cover "
          />
          <p className="py-2 px-4">
            {item.id} {item.title}
          </p>
        </div>
      )}
    </div>
  );
};

const InfiniteCards = () => {
  const { data: photos } = useFetch<Photo[]>(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div>
      {photos && (
        <div>
          <h1 className="font-bold text-xl">
            Infinite Cards ({photos.length} items)
          </h1>
          <div className="flex flex-col gap-2 items-start">
            {photos.map((p) => (
              <PhotoCard key={p.id} item={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteCards;
