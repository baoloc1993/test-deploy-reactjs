import React, { useEffect, useState } from 'react';
import classes from './MovieDetail.module.css';

const MovieDetail = ({ movie }) => {
    const api = "https://api.themoviedb.org/3//movie/" + movie.id +"/videos?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d";
    const [trailers, setTrailers] = useState([])
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setTrailers(data.results.filter(a=> a.site ==='YouTube' && (a.type === 'Teaser' || a.type ==='Trailer'))));
        }, [movie]);
  return (
    <div className={classes["movie-detail-container"]}>
      <div className={classes["movie-detail-left"]}>
        <h1 className={classes["movie-detail-title"]}>{movie.original_title !== undefined ? movie.original_title : movie.original_name}</h1>
        <div className={classes.line}></div>
        <p className={classes["movie-detail-release-date"]}>Release Date: {movie.first_air_date !== undefined ? movie.first_air_date : movie.release_date}</p>
        <p className={classes["movie-detail-vote"]}>Vote: {movie.vote_average} / 10</p>
        <p className={classes["movie-detail-description"]}>{movie.overview}</p>
      </div>
      <div className={classes["movie-detail-right"]}>
         {trailers.length == 0 ? 
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            : <iframe width="100%" height="400"
        
                src={`https://www.youtube.com/embed/${trailers[0].key}`}>
                </iframe>
        }
      </div>
    </div>
  );
};

export default MovieDetail;
