import React from 'react';
import Banner from './Banner';
import MovieList from './MovieList';
import NavBar from './NavBar';
import classes from './Browse.module.css';

const prefix = "https://api.themoviedb.org/3";
const movieCategories =  [
	{url : "/discover/tv?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&language=en-US", title : "", landscape : false}, 
	{url : "/trending/all/week?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&language=en-US", title : "Xu hướng", landscape : true},
	{url : "/movie/top_rated?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&language=en-US", title : "Xếp hạng cao",landscape : true},
	{url : "/discover/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_genres=28", title : "Hành động",landscape : true},
	{url : "/discover/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_genres=35", title : "Hài",landscape : true},
	{url : "/discover/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_genres=27", title : "Kinh Dị",landscape : true},
	{url : "/discover/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_genres=10749", title : "Lãng mạn",landscape : true},
	{url : "/discover/movie?api_key=63c0dedd3a1627f43ad4ea6027b8ce0d&with_genres=99", title : "Tài liệu",landscape : true}
]

function Browse() {
	return (
		<>
		<NavBar />
		<div className= {classes["movie-page"]}>
			<Banner />
			{movieCategories.map(value=>{
				return <MovieList api= {prefix + value.url} title = {value.title} landscape = {value.landscape}/>
			})}
			

	  </div>
		</>
		
	);
}

export default Browse;

