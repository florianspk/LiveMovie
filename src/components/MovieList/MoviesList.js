import Movie from "./Movie";
import React from "react";


export default class MoviesList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                <Movie movie={this.props.movies[0]} updateSelectedMovie={this.props.updateSelectedMovie}/>
                <Movie movie={this.props.movies[1]} updateSelectedMovie={this.props.updateSelectedMovie}/>
                <Movie movie={this.props.movies[2]} updateSelectedMovie={this.props.updateSelectedMovie}/>
                <Movie movie={this.props.movies[3]} updateSelectedMovie={this.props.updateSelectedMovie}/>
                <Movie movie={this.props.movies[4]} updateSelectedMovie={this.props.updateSelectedMovie}/>
            </div>


        )
    }
}
