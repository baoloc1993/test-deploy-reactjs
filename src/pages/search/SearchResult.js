import React from "react";
import classes from "./SearchResult.module.css";
function SearchResult({ results, searchTerm }) {
  return (
    <div className={classes["search-result"]}>
      {results.length > 0 ? (
        <>
          <h2 className={classes["search-result-title"]}>Search results</h2>
          <div className={classes["movie-list"]}>
            {results.map((movie) => (
                movie.poster_path !== null ? 
                (<div key={movie.id} className={classes["movie-card"]}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>) : <></>
            ))}
          </div>
        </>
      ) : (
        <h2 className={classes["search-result-title"]}>No results found </h2>
      )}
    </div>
  );
}

export default SearchResult;