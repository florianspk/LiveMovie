
import React from "react";

export default class MoviesDetails extends React.Component{
    render() {
        return (
            <div className="w-25 bg-light p-4 d-flex flex-column">
                <div className="d-flex flex-column">
                    {this.props.movie === undefined ?
                        (<h4>No Film Founds</h4>) :
                        (<>
                            <h5>{this.props.movie.title}</h5>
                                <hr className="w-100" />
                                <div>
                                    <img alt=""  className="d-block mx-auto h-50 w-100" src={ this.props.movie.img} />
                                </div>
                                <hr className="w-100" />
                                <span className="text-secondary">{this.props.movie.details}</span>
                                <span className="text-center">{this.props.movie.description}</span>
                            </>
                        )}
                </div>
            </div>
        );
    }
}