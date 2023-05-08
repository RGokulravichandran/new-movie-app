import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Addcolor } from "./Addcolor";
import Addmovie from "./Addmovie";
import { Pagenotfound } from "./Pagenotfound";
import { Home } from "./Home";
import ButtonAppBar from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper
        sx={{
          minHeight: "100vh",
          borderRadius: "0px",
        }}
        elevation={4}
      >
        <div className="App">
          {<ButtonAppBar setMode={setMode} mode={mode} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color-game" element={<Addcolor />} />
            <Route path="/movies/add" element={<Addmovie />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
