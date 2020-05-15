/*
 * Copyright (c) 2020. Fichier créée par Florianspk
 * Merci de lire la documentation de mes programme , vous pouvez allez voir mon site : http://florianspk.com
 */
 import * as React from "react";

export default class  Loading extends React.Component{
  render() {
   return (
       <div style={{minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
        <img alt="loading" src="https://media1.tenor.com/images/3a0c9909b542717ce9f651d07c4d4592/tenor.gif?itemid=8985245" />
       </div>
   )
  }
}

