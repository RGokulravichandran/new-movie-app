import React, { useState } from "react";
import "./App.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { API } from "./global";

function MovieDetail() {
  const { id } = useParams();
  const [Movie, setMovie] = useState({});
  const navigate = useNavigate();

  fetch(`${API}/movies/${id}`)
    .then((response) => response.json())
    .then((data) => setMovie(data));
  return (
    <div className="MovieDetail">
      <iframe
        width="100%"
        height="599"
        src={Movie.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-spec">
        <h3 className="movie-name">
          <b>{Movie.name}</b>
        </h3>
        <p className="movie-rating">⭐{Movie.rating}</p>
      </div>
      {Movie.summary}
      <br />
      <br />
      <Button variant="contained" onClick={() => navigate(-1)}>
        ⬅️Back
      </Button>
    </div>
  );
}

export default MovieDetail;
