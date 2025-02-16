import { FC } from "react";
import useFetch from "../../../hooks/useFetch";
import { Photo } from "./PhotoCard";

export const PhotoList = ({
  ItemComponent,
}: {
  ItemComponent: FC<{ item: Photo }>;
}) => {
  const { data: photos } = useFetch<Photo[]>(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <>
      {photos && (
        <div>
          <h1 className="font-bold text-xl">
            Infinite Cards ({photos.length} items)
          </h1>
          <div className="flex flex-col gap-2 items-start">
            {photos.map((p) => (
              <ItemComponent key={p.id} item={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
