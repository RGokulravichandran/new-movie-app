import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

function MovieList() {
  const [movieList, setmovieList] = useState([]);

  const getMovies = () => {
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setmovieList(mvs));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`https://63678f29f5f549f052d7b19a.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(getMovies());
  };

  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie
          mv={mv}
          deleteButton={
            <IconButton
              sx={{ color: "red" }}
              onClick={() => deleteMovie(mv.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

export default MovieList;
