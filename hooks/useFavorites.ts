import useSWR from "swr";
const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favorites",
    (apiURL: string) => fetch(apiURL).then((res) => res.json()),
    {
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    }
  );
  console.log({ data, error, isLoading, mutate });
  return { data };
};

export default useFavorites;
