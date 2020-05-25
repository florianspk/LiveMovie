import Favori from "./Favori";
import React from "react";


export default class FavoriList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {this.props.favoris.map((f,index) => (
                    <Favori key={f.title + index}
                            favori={f}
                            removeFavori={this.props.removeFavori}
                    />
                    ))}
            </div>


        )
    }
}
