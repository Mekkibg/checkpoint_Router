import React,{useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import MovieList from './components/MovieList';
import AddMovie from './components/AddMoive';
import Trailer from './components/Trailer';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [movies, setMovies] = useState([
    
    
    {
      id:1,
      title: "The Batman",
      Description:
        "The film sees Batman, who has been fighting crime in Gotham City for two years, uncover corruption while pursuing the Riddler (Dano), a serial killer who targets Gotham's elite",
      rating: 6.8,
      
      image:"https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg",
      link: "https://www.youtube.com/embed/-FZ-pPFAjYY",
      categorie:'Action/Aventure'
      
    },
    {
      id:2,
    title: "Deadpool 2",
    Description:
      "Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the Yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title .",
    rating: 7.6,
    
    image:
        "https://fr.web.img4.acsta.net/pictures/18/04/06/16/26/2317955.jpg",
      link: "https://www.youtube.com/embed/D86RtevtfrA",
      categorie:'action',
    },
    {
      id:3,
      title: "The Godfather",
      Description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      rating: 9.2,
      
      image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      link: "https://www.youtube.com/embed/UaVTIH8mujA",
      categorie:'action'
    },
  
    {
    id:4,
    title: "Grown Ups 2",
    image:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f4d59b48a1c106958485d311a31af0c1aa81808b5903ccb79fab5af5050ed6cf._RI_V_TTW_.jpg',
    rating: 7.3,
    
    
    Description:
      "As the life-long friends increasingly realise that they are not getting any younger, a new set of challenges arise in the form of unforeseen reunions; familiar bullies; the possibility of a new baby, and the unstoppable threat of a raucous gang of hormone-crazed college fraternity boys.",
      link:"https://www.youtube.com/embed/a_c3hW0Uyvc",
      categorie:'Comedy'
    },
    {
    id:5,
    title: 'The Punisher',
    image:
      'https://fr.web.img6.acsta.net/pictures/19/01/11/09/26/1182338.jpg',
    rating: 8.5,
    Description:
      'The Punisher is shown as a formidable fighter, skilled marksman, and able strategist. All he reveals about himself is that he is a former U.S. Marine. He has a fierce temper but also shows signs of considerable frustration over his self-appointed role of killer vigilante.',
      link: "https://www.youtube.com/embed/s4QV6OZdmWY",
    categorie:'action'
    },
    
    {
    id:6,
    title: 'The Equalizer',
    image:
      'https://fr.web.img5.acsta.net/pictures/14/08/28/16/00/452053.jpg',
    rating: 7.2,
    Description:
      'A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.',
      link: "https://www.youtube.com/embed/VjctHUEmutw",
      categorie:'drame'
    },
    {
    id:7,
    title: 'Killer Elite',
    image:
      'https://fr.web.img6.acsta.net/medias/nmedia/18/85/96/21/19814889.jpg',
    rating: 6.7,
    Description: 'Loosely based on a true story, Killer Elite pits two of the worlds most elite operatives - Danny, a ruthless killer-for-hire Jason Statham and Hunter, his longtime mentor Robert De Niro against the cunning leader of a secret society of former Special Air Service operatives Clive Owen',
      link:"https://www.youtube.com/embed/lft48yFsHGU",
      categorie:'Action'
    },
    {
    id:8,
    title: 'Taken 3',
    image:
      'https://static.pix-geeks.com/2021/07/taken-3-9441-64721.jpg',
    rating: 6,
    Description:
      " Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name.",
      link: "https://www.youtube.com/embed/JuU0M2xBasc",
      categorie:'action'
    },
  ])
  
  const [search, setSearch] = useState("");
  


  /* get what we type in search box*/ 
  
  const searchMovie = (event) => {
    setSearch(event.target.value);
  }

  
  /*create a new array for the new movie */
  
  const handelAdd = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  /*Filter movie list by id as a primairy key*/
  
  const deleteHAndeler = (ID) => {
    setMovies(movies.filter((e) => e.id !== ID));
  };

  
  /* Sort by Title of movies*/ 
  const sortHandler = () => {

   setMovies ([...movies].sort((a, b) => a.title > b.title ? 1 : -1))
  }
  /*Sort by Rating Descendant*/
 const sortByRateDown = () => {

  setMovies ([...movies].sort((a, b) => b.rating - a.rating))
 }
  /*Sort by Rating Ascendant*/
const sortByRateUp = () => {

  setMovies ([...movies].sort((a, b) => a.rating - b.rating))
}
  
  return (
  
      <div className='container-fluid'>
      <div className='row'>     
        {/* Nav bar*/}
        <Filter searchMovie={searchMovie} />
        
<Routes>
  <Route path='/' element={<MovieList movies={movies}  search={search} deleteHAndeler={deleteHAndeler}  searchMovie={searchMovie} sortHandler={sortHandler} sortByRateUp={sortByRateUp} sortByRateDown={sortByRateDown} />}/>
<Route path='/add'element={<AddMovie handelAdd={handelAdd}  />}/>
<Route path='trailer/:IDMovie' element={<Trailer movies={movies} />}/>

</Routes>

      </div>
      </div>
  ) }
export default App;