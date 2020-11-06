import React from 'react';
import PropTypes from 'prop-types';
import {SearchItem} from './SearchItem'

export const Search = ({serieInfo}) => {
    const displayInfo=()=>{
        const series =serieInfo.map(({show})=>{
            return(<SearchItem 
                key={show.id}
                id={show.id}
                genres={show.genres}
                image={show.image?.medium} 
                name={show.name} 
                showType={show.type} 
                summary={show.summary} />    
                ) })
        return series
    }
    
    return (
        <div className="ui divided items ">
            {serieInfo.length===0? "No results found ese":displayInfo()}
        </div>
    )

}
Search.propTypes ={
    serieInfo: PropTypes.array.isRequired
}