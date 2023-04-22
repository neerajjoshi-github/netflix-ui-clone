import axios from "axios";

const fetchTMDB = (parms: string, page: number) => {
  axios.get(`https://api.themoviedb.org/3${parms}`);
};
