import React from 'react';
import {Header, MoviesList, MoviesDetails, Loading, SearchBar} from "./components";
import apiMovie from "./components/conf/api.movie";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
             loaded: false
        }
    }
    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }

    componentDidMount() {
        apiMovie.get('/discover/movie').then(
            response => response.data.results
        ).then(
            moviesApi => {
                const movies = moviesApi.map( m => ( {
                    img: `https://image.tmdb.org/t/p/w500/${m.poster_path}`,
                    title: m.title,
                    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count} votes)`,
                    description: m.overview,
                } ))
                this.updateMovies(movies);
            }
        ).catch(
            err => console.log(err)
        )
    }

    updateMovies = (movies) => {
        this.setState({
            movies,
            loaded :true,
            })
    }

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <SearchBar updateMovies={this.updateMovies}/>
                {this.state.loaded ? (<div className="d-flex flex-row flex-fill pt-4 p-3">
                    <MoviesList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
                    <MoviesDetails movie={ this.state.movies[this.state.selectedMovie]}/>
                </div> ) : (
                    <Loading />
                )
            }

            </div>
        );
    }
}

export default App;
