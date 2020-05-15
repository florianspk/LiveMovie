import React from 'react';
import {Header, MoviesList, MoviesDetails, Loading} from "./components";
import data from "./data";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
             loaded: false
        }
        setTimeout(() => {
            this.setState(
                {
                    loaded: true,
                    movies: data,
                }
            )
            App.loaded=true
        },500)
    }
    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
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
