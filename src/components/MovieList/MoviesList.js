import Movie from "./Movie";
import React from "react";


export default class MoviesList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {this.props.movies.map((p,index) => (
                    <Movie key={p.title + index} movie={p} updateSelectedMovie={() => this.props.updateSelectedMovie(index)}/>
                    ))}
            </div>


        )
    }
}
