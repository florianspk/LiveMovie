import React from "react";
import {MoviesDetails, MoviesList, SearchBar} from "./Components";
import {Loading} from "../../components";

export default (props) => {
    return (
        <>
        <SearchBar updateMovies={props.updateMovies}/>
        {props.loaded ? (
            <div className="d-flex flex-row flex-fill pt-4 p-3">
                <MoviesList movies={props.movies}
                            updateSelectedMovie={props.updateSelectedMovie}
                            favoris={props.favoris.map(r => r.title)}
                            addFavoris={props.addFavoris}
                            removeFavoris={props.removeFavoris}/>
                <MoviesDetails movie={ props.movies[props.selectedMovie]}/>
            </div> ) :
            (<Loading />)
        }
        </>
    )
}