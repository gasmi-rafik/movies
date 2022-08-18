import { useState } from 'react';
import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import {moviesData} from  './components/MoviesData'
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
function App() {
 const [movies , setMovies]=useState(moviesData)
 const [name , setName] =useState("")
 const [searchRate , setSearchRate] =useState(0)

  return (
    <div className="App">
     <Navbarr setName={setName} setSearchRate={setSearchRate} />
     <MovieList movies={movies} name={name} searchRate={searchRate}/>
     <AddMovie setMovies={setMovies} movies={movies}/>
    </div>
  );
}

export default App;
