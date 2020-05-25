import React from "react";
import Style from './Favori.module.scss'

export default class Favori extends React.Component{
    mousseEnter = () => {
        this.props.updateSelectedMovie(this.props.favori.title)
    }
    render() {
        return (
                <div className={"border d-flex d-row " + Style.container }>
                    <img width="150" height="200" alt={this.props.favori.title} src={this.props.favori.img}  />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h6>{this.props.favori.title}</h6>
                        <p style={{fontSize: '12px'}} className="flex-fill text-secondary details">{this.props.favori.details}</p>
                        <div className="d-flex flex-row justify-content-end">
                            <button onClick={() => {this.props.removeFavori(this.props.favori.title)}} className="btn btn-small btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
        )

    }
}
