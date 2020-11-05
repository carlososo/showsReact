import React,{ useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import fetchData from '../helpers/fetchData';

export const Table = ({ id, number, premiere }) => {
    const [episodes, setEpisodes]= useState([])
    
    useEffect(()=>{
        fetchData.get(`/seasons/${id}/episodes`)
        .then(({data})=>{
            setEpisodes(data)
        })
    },[])
    

    const renderRows =()=>{
        const renderedRow = episodes.map(episode=>{
            return(<tr key={episode.id}>
                <td className="warning">{episode.name}</td>
                <td className="warning">{episode.number}</td>
                <td className="warning">{episode.season}</td>
                <td className="warning">{episode.type}</td>
                </tr>
                
            )
        })
        return renderedRow
    }
// anamaria.x.alcantara@questdiagnostics.com
  return (
    <div className="table-div container mb-5 ">
      <h2>Season:{number}</h2>
      <h3>Air Date: {premiere}</h3>
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="header">Episode Name</th>
            <th className="header">Number</th>
            <th className="header">Season</th>
            <th className="header">Episode Type</th>
          </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
      </table>
      <hr/>
    </div>
  );
};

Table.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number,
  premiere: PropTypes.string,
};