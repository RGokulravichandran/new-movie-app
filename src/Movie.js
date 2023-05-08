import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Count } from "./Count";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ mv, deleteButton }) {
  const navigate = useNavigate();
  const styles = { color: mv.rating < 8.5 ? "red" : "green" };
  const [show, setShow] = useState(true);
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={mv.poster} />
      <CardContent>
        <div className="movie-spec">
          <h3 className="movie-name">
            <b>{mv.name}</b>
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Expand summary"
            >
              {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="info"
              onClick={() => navigate(`/movies/${mv.id}`)}
            >
              <InfoIcon />
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">
            ⭐{mv.rating}
          </p>
        </div>
        {show ? <p className="movie-summary"> {mv.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Count /> {deleteButton}
      </CardActions>
    </Card>
  );
}
