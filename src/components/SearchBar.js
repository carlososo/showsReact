import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'
import { Link, useHistory} from 'react-router-dom'

const SearchBar = ({getMovies}) => {

    const history =useHistory()

    const [search, setSearch] = useState("");

    const onFormSubmit=(e)=>{
        e.preventDefault();
        getMovies(search)
        history.push("/search")
        setSearch("")
    }

  return (
    <div className="container searchbar">
      <div className="title">
        <Link to="/" className="Link" ><h1 style={{fontFamily:'Syne Mono, monospace' }}>TVGuide</h1></Link>
      </div>
      <div className="form-container">
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label htmlFor="searchField">
              <input
                name="searchField"
                className="searchField"
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder=" "
              />
              <span>Looking for a Tv Show?</span>
            </label>
            <button className="btn">
              <FontAwesomeIcon icon={faSearch} /> Submit
            </button>
          </div>
        </form>
      </div>
      <div className="login_list">
          <li className="list">
              <ul>Login</ul>
              <ul>Register</ul>
          </li>
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes ={
  getMovies: PropTypes.func.isRequired
}
