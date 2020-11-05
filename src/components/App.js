import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import fetchData from '../helpers/fetchData';5
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import {Search} from './Search'
import Serie from './Serie'
import {Seasons} from './Seasons'
import { Cast } from "./Cast";
const App = () => {

  const [searchFromBar, setSearchFromBar] =useState([])
  const getMovies=(search)=>{
    fetchData.get('/search/shows',{
      params:{
        q: search
      }
    }).then(({data}) => setSearchFromBar(data))
      .catch(err => console.log(err))
  }

  return (
    
    <Router>
    <div>
      <header className="headerMain">
        <SearchBar getMovies={getMovies}/>
      </header>
      <main className="container main-content">
        <Switch>
          <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/search">
          <Search serieInfo={searchFromBar}/>
        </Route>
        <Route path="/search/:idSerie/">
          <Serie/>
        </Route>
        <Route path="/:idSerie/seasons">
          <Seasons/>
        </Route>
        <Route path="/:idSerie/cast">
          <Cast/>
        </Route>
        </Switch>
       
      </main>
      <footer className=" futer ">
        <div className="ui container">
          <p className="text-footer">la tarea de las seriesillas y todas esas babosadas que se escriben</p>
        </div>
      </footer>
    </div>
    </Router>
  );
};

export default App;
