import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const myKey = import.meta.env.VITE_API_KEY;

  const response = await axios.get<FetchMovies>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    }
  );
  return response.data.results;
}