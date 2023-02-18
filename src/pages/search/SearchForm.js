import React, { useState } from "react";
import classes from './SearchForm.module.css';
function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <form className={classes["search-form"]} onSubmit={handleSearchSubmit}>
        <div>
        <input
            className={classes["search-input"]}
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
      />
        </div>
      
      <div>
      <button className={classes["search-button"]} type="submit">
        Search
      </button>
      <button className={classes["clear-button"]} type="button" onClick={handleClearClick}>
        Clear
      </button>
      </div>
      
    </form>
  );
}

export default SearchForm;
