export const fetchMovies = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchTv = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};
