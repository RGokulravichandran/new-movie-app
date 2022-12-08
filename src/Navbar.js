import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ButtonAppBar({setMode, mode}) {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
      <Button color="inherit" onClick={()=>navigate("/movie")}>Movies</Button>
      <Button color="inherit" onClick={()=>navigate("/colorgame")}>Color Game</Button>
      <Button color="inherit" onClick={()=>navigate("/movie/add")}>Add Movie</Button>
      <Button sx ={{marginLeft:"auto"}} 
      startIcon= {mode === "dark" ? <Brightness7Icon />: <Brightness4Icon/>}
      color="inherit" 
      onClick={()=>setMode(mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? "light" : "dark"} mode
        </Button>

    </Toolbar>
  </AppBar>

  );
}