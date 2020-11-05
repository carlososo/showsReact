import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import placeHolderImage from "../img/image.png";

export const SearchItem = ({image,id ,genres, name, showType,summary}) => {
       return (
        <div className="item">
            <div className="image">
                <img src={image?image:placeHolderImage} alt="image"/>
            </div>
            <div className="content"> 
                <Link to={`/search/${id}`} className="header">{name}</Link>
                <div className="meta">
                    <span className="cinema">{showType}</span>
                </div>
                <div className="description">
                <p dangerouslySetInnerHTML={{__html:summary}}></p>
                </div>
                <div className="extra">
                    {genres.map((genre, i)=>{
                        return(
                            <div key={i} className="ui label">{genre}</div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

SearchItem.propTypes ={
    image: PropTypes.string,
    id:PropTypes.number,
    genres: PropTypes.array,
    name: PropTypes.string,
    showType: PropTypes.string,
    summary: PropTypes.string
}
