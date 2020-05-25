import React from "react";
import {FavoriList} from "./Components";
import {Loading} from "../../components";

export default (props) => {
    return (
                    <div className="d-flex flex-row flex-fill pt-4 p-3">
                        {props.loaded ? (<FavoriList favoris={props.favoris} removeFavori={props.removeFavori} />)
                            :
                            <Loading />}
                    </div> )

}