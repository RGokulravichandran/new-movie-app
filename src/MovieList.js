import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import "./App.css";

function MovieList() {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setmovieList(mvs));
  });
  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie mv={mv} />
      ))}
    </div>
  );
}

export default MovieList;
