import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import { Table } from "./Table";

export const Seasons = () => {
  const { idSerie } = useParams();
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    fetchData
      .get(`shows/${idSerie}/seasons`)
      .then(({ data }) => {
        setSeasons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderTables = () => {
    const serieSeasons = seasons.map((season) => {
      return (
        <Table
          key={season.id}
          id={season.id}
          number={season.number}
          premiere={season.premiereDate}
        />
      );
    });
    return serieSeasons;
  };
  return (
    <div>
      <div className="ui steps">
        <Link to={`/search/${idSerie}`}>
          <div className="link step">
            <i className="undo icon"></i>
            <div className="content">
              <div className="title">Go Back</div>
              <div className="description">One step</div>
            </div>
          </div>
        </Link>
        <Link to={`/${idSerie}/cast`}>
          <div className="link step">
            <i className="user secret icon"></i>
            <div className="content">
              <div className="title">Characters</div>
              <div className="description">Characters</div>
            </div>
          </div>
        </Link>
      </div>
      {renderTables()}
    </div>
  );
};
