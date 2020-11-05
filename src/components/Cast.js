import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import fetchData from '../helpers/fetchData';

export const Cast = () => {
    const { idSerie } = useParams();
    const [cast, setCast] =useState([])
    useEffect(()=>{
        fetchData.get(`/shows/${idSerie}/cast`)
        .then(({data})=>{
            setCast(data)
        })
    },[])

    const renderCast =()=>{
        const rederedCast = cast.map(({character, person})=>{
            return(
                    <div key={character.id} className="card">
                        <div className="image">
                            <img src={character.image?.medium} alt={character.name}/>
                        </div>
                        <div className="content">
                            <div className="header">{character.name}</div>
                            <div className="meta">{person.name}</div>
                            <div className="description">
                                <p>Gender: {person.gender}</p>
                                <p>Birthday: {person.birthday}</p>
                                <p>Country of Origin: {person.country.name}</p>
                            </div>

                        </div>
                    </div>

            )
        })
        return rederedCast
    }
    console.log(cast)
  return (
    <div>
      <div className="ui steps">
        <Link to={`/${idSerie}/seasons`}>
          <div className="link step">
            <i className="play icon"></i>
            <div className="content">
              <div className="title">Seasons</div>
              <div className="description">Go To the Seasons</div>
            </div>
          </div>
        </Link>
        <Link to={`/search/${idSerie}`}>
          <div className="link step">
            <i className="undo icon"></i>
            <div className="content">
              <div className="title">Go Back</div>
              <div className="description">One step</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="container ui link cards">
        {renderCast()}
      </div>
    </div>
  );
};
