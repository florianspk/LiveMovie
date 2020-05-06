import React from 'react';
import {Header, MoviesList, MoviesDetails} from "./components";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    title: "Mr Robot",
                    img: "https://1.bp.blogspot.com/-Fz1JwOjgFR4/XgKzkSjMhOI/AAAAAAABNnU/exXe5MrTYo82scS81VDo6_Tbuggf9S6EQCLcBGAsYHQ/s1600/mrrobot.jpg",
                    details: "Série",
                    content: "Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? "
                },
                {
                    title: "Arrow",
                    img: "https://photos.abweb.com/websites_data/ab1/upload/programmes/arrow/jaquette/arrow.JPG",
                    details: "Série",
                    content: "Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? "
                },
                {
                    title: "Las 21 vegas ",
                    img: "https://fr.web.img6.acsta.net/medias/nmedia/18/65/53/77/18920464.jpg",
                    details: "Film",
                    content: "Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? "
                },
                {
                    title: "The Social Network",
                    img: "https://e-mediatheque.sqy.fr/Ils/digitalCollection/DigitalCollectionThumbnailHandler.ashx?documentId=2859979&size=LARGE&fallback=https%3A%2F%2Fe-mediatheque.sqy.fr%2Fui%2Fskins%2Fdefault%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FAUVI_LARGE.png",
                    details: "Film",
                    content: "Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? Ubi est gratis demissio? "
                }

            ],
            selectedMovie: 0
        }
    }
    updateSelectedMovie = (title) => {
        const index = this.state.movies.findIndex((m) => {return m.title === title});
        this.setState({
            selectedMovie: index
        })
    }
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <div className="d-flex flex-row flex-fill pt-4 p-3">
                    <MoviesList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
                    <MoviesDetails movie={ this.state.movies[this.state.selectedMovie]}/>
                </div>
            </div>
        );
    }
}

export default App;
