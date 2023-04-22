type ShowsData = {
  page: number;
  results: ShowsResult[];
  total_results: number;
  total_pages: number;
};

type ShowsResult = {
  type: "shows";
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: Date;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

type MoviesData = {
  page: number;
  results: MoviesResult[];
  dates: Dates;
  total_pages: number;
  total_results: number;
};

type Dates = {
  maximum: Date;
  minimum: Date;
};

type MoviesResult = {
  type: "movies";
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};
