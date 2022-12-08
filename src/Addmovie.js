import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function Addmovie({movielist, setmovieList}){

    const [name, setname] = useState("");
    const [poster, setposter] = useState("");
    const [rating, setrating] = useState("");
    const [summary, setsummary] = useState("");
  
    const addnewmoviecard={
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,
    }
    return(
      <div className='add-movie-container'>
      <TextField onChange={(event)=>setname(event.target.value)} id="filled-basic" label="Movie Name" variant="filled" />
      <TextField onChange={(event)=>setposter(event.target.value)} id="filled-basic" label="Poster" variant="filled" />
      <TextField onChange={(event)=>setrating(event.target.value)} id="filled-basic" label="Rating" variant="filled" />
      <TextField onChange={(event)=>setsummary(event.target.value)} id="filled-basic" label="Summary" variant="filled" />
      <Button onClick={()=>setmovieList([...movielist,addnewmoviecard])} variant="contained">Add Movie</Button>
      </div>
    )
  }