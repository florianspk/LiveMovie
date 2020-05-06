
import React from "react";

export default class MoviesDetails extends React.Component{
    render() {
        return (
            <div className="w-25 border p-4">
                <div className="d-flex flex-column">
                    <h5>{this.props.movie.title}</h5>
                    <hr className="w-100" />
                    <div>
                        <img  className="d-block mx-auto h-50 w-50" src={ this.props.movie.img} />
                    </div>
                    <hr className="w-100" />
                    <span className="text-secondary">{this.props.movie.details}</span>
                    <span className="text-center">{this.props.movie.content}</span>
                </div>
            </div>

        );

    }
}
