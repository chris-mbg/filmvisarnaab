import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  // All movies fetch from DB on render
  useEffect(() => fetchAllMovies(), []);

  const fetchAllMovies = async () => {
    let result = await fetch("/api/v1/movies/");
    result = await result.json();
    if (result.status !== "error") {
      setAllMovies(result);
    }
  };

  const getMovieById = async (movieId) => {
    let result = await fetch(`/api/v1/movies/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      return result;
    }
  };

  const getAllScreeningsForMovie = async movieId => {
    let result = await fetch(`/api/v1/screenings/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      return result;
    }
  };

  // ! Delete this useEffect when done testing
  useEffect(async () => {
    let screenings = await getAllScreeningsForMovie("60acb7942ec1e13448754a85");
    console.log(screenings);
  }, []);

  const values = {
    allMovies,
    getMovieById,
    getAllScreeningsForMovie,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
