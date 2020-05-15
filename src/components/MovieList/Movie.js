import React from "react";
import Style from './Movie.module.scss'

export default class Movie extends React.Component{
    mousseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }
    render() {
        return (
                <div onMouseEnter={this.mousseEnter} className={"border d-flex d-row " + Style.container }>
                    <img width="150" height="200" alt={this.props.movie.title} src={this.props.movie.img}  />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100"/>
                        <span className="text-secondary">{this.props.movie.details}</span>
                        <span>{this.props.movie.content}</span>
                    </div>
                </div>
        )

    }
}
