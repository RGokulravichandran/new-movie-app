import React, { useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [Movie, setMovie] = useState({});

  fetch(`https://63678f29f5f549f052d7b19a.mockapi.io/movies/${id}`)
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
    </div>
  );
}

export default MovieDetail;
