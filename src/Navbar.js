import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function ButtonAppBar({setMode, mode}) {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
      <Button color="inherit" onClick={()=>navigate("/movie")}>Movies</Button>
      <Button color="inherit" onClick={()=>navigate("/colorgame")}>Color Game</Button>
      <Button color="inherit" onClick={()=>navigate("/movie/add")}>Add Movie</Button>
      <Button color="inherit" onClick={()=>setMode(mode === "dark" ? "light" : "dark")}>
      {(mode === "dark" ? <LightModeIcon/> : <DarkModeIcon/>)}Theme
        </Button>

    </Toolbar>
  </AppBar>

  );
}