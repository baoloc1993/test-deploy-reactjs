import React, { useState, useEffect } from 'react';
import MovieDetail from './MovieDetail';
import classes from './MovieList.module.css';
const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [focusMovie, setFocusMovie] = useState({});

  useEffect(() => {
    fetch(props.api)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  function handleClickImage (movie) {
    if (focusMovie.id === movie.id){
        setFocusMovie({});
    }else{
        setFocusMovie(movie);    
    }
    
  }

  return (
    <>
        <div className={classes["movie-list-title"]}>
            <h2 >{props.title}</h2>
        </div>
        {props.landscape ? 
            (
                <div className={classes["movie-container-horizon"]}>
                    {movies.map(movie => (
                        <div key={movie.id} className={classes["movie-card-horizon"] } onClick={()=> handleClickImage(movie)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                        </div>
                    ))}
                </div>
            )
        :   (
                <div className={classes["movie-container"]}>
                    {movies.map(movie => (
                        <div key={movie.id} className={classes["movie-card"]} onClick={()=> handleClickImage(movie)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        </div>
                    ))}
                </div>
           )
        }
        {focusMovie.id == undefined ?  <></> : <MovieDetail movie = {focusMovie}/>}
    </>
  );
};

export default MovieList;
