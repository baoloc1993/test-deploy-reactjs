import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
const NavBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScroll(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    function handleOnClickSearchButton(){

    }
  return (
    <nav style={{ backgroundColor: scroll < 100 ? 'black' : 'transparent' }} className={classes["nav-bar"]}>
      <div className={classes.header}>
        <h4>Movie App</h4>
      </div>
      <div className={classes['search-icon']}>
        <Link to="/search">
      <svg
            className='svg-inline--fa fa-search fa-w-16'
            onClick={()=> handleOnClickSearchButton()}
            fill='#ccc'
            aria-hidden='true'
            data-prefix='fas'
            data-icon='search'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
        </svg>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
