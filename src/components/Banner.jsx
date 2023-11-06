import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'


function Banner({fetchUrl}) {
    const[movie ,setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";


const fetchData =async()=>{
    const {data} =await instance.get(fetchUrl)
    //console.log(data.results);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
} 
console.log(movie);
     useEffect(()=>{
    fetchData()
},[])


  return (
    <div style={{height:'600px',
    backgroundImage:`url(${base_url}/${movie?.backdrop_path})`
    ,background:`cover`,backgroundAttachment:`fixed`}}>
        <div className='banner-content'>
          <h1>{movie?.name}</h1>
          <button className='btn btn-danger'>play <i class="fa-solid fa-play bg-transparent"></i></button>
          <button className='btn border-white more ms-3'> more info <i class="fa-solid fa-caret-down"></i></button>
          <h2>{movie?.overview?.slice(0,200)}...</h2>

        </div>
    </div>
  )
}

export default Banner