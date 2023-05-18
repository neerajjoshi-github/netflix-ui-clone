export const fetchMovies = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchMovieDetails = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchTv = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchTvDetails = async (TvId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${TvId}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchMovieVideo = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const fetchTvVideo = async (TvId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${TvId}/videos?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};
export const fetchByLanguage = async (language: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1&with_original_language=${language}`
  );
  return response.json();
};
