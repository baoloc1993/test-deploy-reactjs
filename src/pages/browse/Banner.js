import React from 'react';
import useHttp from '../../customHook/useHttp';
import classes from './Banner.module.css';

const Banner = () => {
  const api = "https://api.themoviedb.org/3/discover/tv?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_network=123";
  const { loading, error, data } = useHttp(api, []);

  for (var i = 0 ; i < 5 ; i++){
    var randomMovie = data == undefined ? {} : data.results[Math.floor(Math.random() * data.results.length - 1)]
    if (randomMovie !== undefined) break;
  }
  
  return (
    <div
      className={classes['movie-banner']}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={classes['movie-banner-content']}>
        <h2 className={classes['movie-title']}>{randomMovie.name }</h2>
        <div className={classes['movie-actions']}>
          <button className={classes['play-button']}>Play</button>
          <button className={classes['mylist-button']}>My List</button>
        </div>
        <p className={classes['movie-description']}>{randomMovie.overview}</p>

      </div>
    </div>
  );  
};

export default Banner;
