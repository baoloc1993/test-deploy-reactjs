import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import classes from "./Search.module.css";
import NavBar from "../browse/NavBar";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const api = "https://api.themoviedb.org/3/search/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&language=en-US&page=1&include_adult=false"
  const handleSearch = (term) => {
    setSearchTerm(term);
    fetch(api + "&query=" + term)
    .then(res => res.json())
    .then(data => setSearchResults(data.results));

    // Call API to get search results
    // Use setSearchResults to update state with results
  };

  return (
    <>
      <NavBar/>
      <div className={classes["search-container"]}>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} searchTerm={searchTerm} />
    </div>
    </>
    
  );
}

export default Search;
