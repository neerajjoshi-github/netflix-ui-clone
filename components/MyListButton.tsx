import React, { FC, useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

type MyListButtonProps = {
  id: string | number;
  mediaType: string;
  textSize: "text-xs" | "text-base" | "text-lg";
  buttonClassname?: string;
};

const MyListButton: FC<MyListButtonProps> = ({
  id,
  mediaType,
  textSize,
  buttonClassname,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const { data, error }: any = useSWR("/api/favorites", fetcher);
  useEffect(() => {
    if (data?.favorites?.length) {
      const foundFavorite = data.favorites.find(
        (favorite: any) =>
          parseInt(favorite.id) === id && favorite.mediaType === mediaType
      );
      setIsFavorite(foundFavorite !== undefined);
    }
  }, [data, id, mediaType]);
  const toggleFavorite = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | number,
    mediaType: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoding(true);
    const response = await fetch("/api/favourite", {
      method: "POST",
      body: JSON.stringify({ id, mediaType }),
    });
    if (response.ok) {
      setIsFavorite(!isFavorite);
    }
    setIsLoding(false);
  };
  return (
    <button
      className={`${buttonClassname} disabled:bg-white/10 disabled:text-zinc-300 z-[30] ml-auto flex gap-1 items-center p-1 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-sm`}
      onClick={(e) => toggleFavorite(e, id, mediaType)}
      disabled={isLoding}
    >
      <IoMdAdd
        className={`${isFavorite ? "rotate-45" : "rotate-0"} 
         transition  duration-300`}
      />
      <span className={`${textSize}`}>{isFavorite ? "Remove" : "My List"}</span>
    </button>
  );
};

export default MyListButton;
