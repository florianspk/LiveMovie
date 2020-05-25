import React from 'react';
import {Header} from "./components";
import apiMovie from "./conf/api.movie";
import Films from "./Features/Films"
import Favoris from "./Features/Favoris"
import {BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';
import apiFirebase from "./conf/api.firebase";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false,
            favoris: null
        }
    }

    addFavoris = (title) => {
        const favoris = this.state.favoris.slice();
        const film = this.state.movies.find(m => m.title === title);
        favoris.push(film)
        this.setState({favoris} , () => this.saveFavoris())

    }
    removeFavoris = (title) =>{
        const favoris = this.state.favoris.slice();
        const index = this.state.favoris.findIndex( f => f.title === title)
        favoris.splice(index,1)
        this.setState({favoris} ,() => this.saveFavoris());
    }

    saveFavoris = () => {
        apiFirebase.put('favoris.json' , this.state.favoris)
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
        apiFirebase.get('favoris.json').then(response => {
            let favoris = response.data ? response.data : [];
            this.updateFavoris(favoris)
        })
    }

    updateFavoris = favoris => {
        this.setState({
            favoris,
            loaded: this.state.movies ? true : false
        })
    }

    updateMovies = (movies) => {
        this.setState({
            movies,
            loaded : this.state.favoris ? true : false
            })
    }

    render() {
        return (
            <Router>
                <div className="App d-flex flex-column">
                    <Header />
                    <Switch>
                        <Route path="/films" render={(props) => {
                           return <Films {... props}
                                        loaded={this.state.loaded}
                                        updateMovies={this.updateMovies}
                                        updateSelectedMovie={this.updateSelectedMovie}
                                        movies={this.state.movies}
                                        selectedMovie={this.state.selectedMovie}
                                        addFavoris={this.addFavoris}
                                        removeFavoris={this.removeFavoris}
                                        favoris={this.state.favoris}
                           />}
                        }/>
                        <Route path="/favoris" render={(props) => {
                           return (
                               <Favoris {...props} loaded={this.state.loaded} favoris={this.state.favoris} removeFavori={this.removeFavoris}/>
                           )
                        }}/>
                        <Redirect to="/films" />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
