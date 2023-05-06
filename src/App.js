import './App.css';
import {useState} from 'react';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { Addcolor } from "./Addcolor"
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Addmovie from './Addmovie';
import { Count } from './Count';
import { Pagenotfound } from './Pagenotfound';
import { Home } from './Home';
import ButtonAppBar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';








function App() {

  const initialmovielist = [
    
{
name: "Vikram",
poster:
"https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
rating: 8.4,
summary:
"Members of a black ops team must track and eliminate a gang of masked murderers.",

},
{
name: "RRR",
poster:
"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
rating: 8.8,
summary:
"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",

},
{
name: "Iron man 2",
poster:
"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
rating: 7,
summary:
"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",

},
{
name: "No Country for Old Men",
poster:
"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
rating: 8.1,
summary:
"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",

},
{
name: "Jai Bhim",
poster:
"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
summary:
"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
rating: 8.8,

},
{
name: "The Avengers",
rating: 8,
summary:
"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
poster:
"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",

},
{
name: "Interstellar",
poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
rating: 8.6,
summary:
"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",

},
{
name: "Baahubali",
poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
rating: 8,
summary:
"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",

},
{
name: "Ratatouille",
poster:
"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
rating: 8,
summary:
"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",

}]

const [movielist, setmovieList] = useState(initialmovielist);

const navigate = useNavigate();

const [mode, setMode] = useState("dark")

const themeCtx = createTheme({
  palette: {
    mode: mode,
  },
});

fetch('https://63678f29f5f549f052d7b19a.mockapi.io/movies')
   .then((data) => data.json())
   .then((mvs)=>console.log(mvs));

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper
      sx={{
        minHeight: "100vh",
        borderRadius: "0px",
      }}
      elevation={4}>
    <div className="App">
      {<ButtonAppBar setMode={setMode} mode={mode} />}

<Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/colorgame' element={<Addcolor />}/>
      <Route path='/movie/add' element={<Addmovie movielist= {movielist} setmovieList = {setmovieList} />}/>
      <Route path='/movie' element={<AddmovieList movielist= {movielist}/>}/>
      <Route path='/films' element={< Navigate replace to = '/movie'/>}/>
      <Route path='*' element={<Pagenotfound />}/>
</Routes>  
    </div> 
    </Paper>
    </ThemeProvider>

  )}

function AddmovieList({movielist}){

  return(
    <div className="movielist">
        {movielist.map((data) => <Movie mv={data} />)}
      </div>
  )}

function Movie({mv}){

  const styles ={  color: mv.rating < 8.5 ? 'red' : 'green'}
  const [show, setShow] = useState(true);
  return(
        <Card className='movie-container'>
            <img className='movie-poster' src={mv.poster}/>
            <CardContent>
            <div className='movie-spec'>
            <h3 className='movie-name'><b>{mv.name}</b>
            <IconButton color="primary" onClick={() => setShow(!show)} aria-label="Expand summary">
            {show ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
            </IconButton></h3>
            <p style={styles} className='movie-rating'>⭐{mv.rating}</p>
            </div>
            {show ? <p className='movie-summary'> {mv.summary}</p> : null}
           </CardContent>
            <CardActions>
              <Count/>
            </CardActions>
         </Card>
         
)}

export default App;
