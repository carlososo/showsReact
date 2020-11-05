import React from 'react';
import estatic from "../img/tenor.gif";

const Home =()=>{

    return(
        <div className="dummyHolder">
        <div className="title-main">
          <h1>Looking for something to see?</h1>
        </div>
        <div className="static-image">
          <img src={estatic} alt="" />
        </div>
      </div>
    )
}
export default Home;