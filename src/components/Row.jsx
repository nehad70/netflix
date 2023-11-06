import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'





function Row({title,fetchurl,isPresent}){
  const [allMovies,SetAllMovies] =useState()
  const base_url = "https://image.tmdb.org/t/p/original/";




 const fetchData =async() =>{
  const {data} = await instance.get(fetchurl)
  SetAllMovies(data.results);
}
console.log(allMovies);

useEffect(()=>{
  fetchData()
},[])

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {
          allMovies?.map(item=>
            (<img className='movie' src={`${base_url}${isPresent?item.poster_path:item?.backdrop_path}`} alt='no image'/>))
            
        }
      </div>
    </div>
  )
}

export default Row