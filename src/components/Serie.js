import React, { useEffect, useState } from 'react'
import fetchData from '../helpers/fetchData'
import {Link, useParams} from 'react-router-dom'

const Serie =()=>{

    const {idSerie} = useParams()
    const [serie, setSerie] =useState({})
    const {genres} = serie;
    useEffect(() => {
        fetchData.get(`/shows/${idSerie}`)
            .then(({data}) =>{setSerie(data)})
            .catch(err =>console.log(err));
        
    }, [idSerie])
return (
  <div>
    <div className="ui steps">
    <Link to={`/${idSerie}/seasons`}><div className="link step">
        <i className="play icon"></i>
        <div className="content">
          <div className="title">Seasons</div>
          <div className="description">
            Go To the Seasons
          </div>
        </div>
      </div></Link>
      <Link to={`/${idSerie}/cast`}><div className="link step">
        <i className="user secret icon"></i>
        <div className="content">
          <div className="title">Characters</div>
          <div className="description">
            Characters
          </div>
        </div>
      </div>
      </Link>
      <Link to={`/`}>
          <div className="link step">
            <i className="home icon"></i>
            <div className="content">
              <div className="title">Go Back</div>
              <div className="description">Home</div>
            </div>
          </div>
        </Link>
    </div>

    <div className="mb-5 serie-header">
      <h1>{serie.name}</h1>
      <img src={serie.image?.medium} alt={serie.name} />
    </div>
    <div>
      <p>
        Summary:{" "}
        <span dangerouslySetInnerHTML={{ __html: serie.summary }}></span>
      </p>
      <p>Status: {serie.status}</p>
      <p>Type: {serie.type}</p>
      <ul>
        {genres != undefined &&
          genres.map((genre, i) => {
            return <li key={i}>{genre}</li>;
          })}
      </ul>
    </div>
  </div>
);
}
export default Serie;