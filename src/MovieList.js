import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import { IconButton } from "@mui/material";
import { API } from "./global";

function MovieList() {
  const [movieList, setmovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mvs) => setmovieList(mvs));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
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
