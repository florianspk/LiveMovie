import React from "react";
import Style from './Movie.module.scss'

export default class Movie extends React.Component{
    mousseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }
    render() {
        return (
                <div onClick={this.mousseEnter} className={"border d-flex d-row " + Style.container }>
                    <img width="150" height="200" alt={this.props.movie.title} src={this.props.movie.img}  />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h6>{this.props.movie.title}</h6>
                        <p style={{fontSize: '12px'}} className="flex-fill text-secondary details">{this.props.movie.details}</p>
                        <div className="d-flex flex-row justify-content-end">
                        {this.props.isFavori ? (
                            <button onClick={() => {this.props.removeFavoris(this.props.movie.title)}} className="btn btn-small btn-danger">Remove</button>

                        ) : ( <button onClick={() => {this.props.addFavoris(this.props.movie.title)}} className="btn btn-small btn-primary">Add</button>)}
                        </div>
                    </div>
                </div>
        )

    }
}
