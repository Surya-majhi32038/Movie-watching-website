import { getMoviesData } from "./GetApiData";
import { getMovieDetails } from "./GetMovieData";
const movieLoader = async () => {
    const [movies, additionalData] = await Promise.all([
      getMoviesData(),
      getMovieDetails(),
    ]);
  
    return {
      movies,
      additionalData,
    };
  };
export default movieLoader; 