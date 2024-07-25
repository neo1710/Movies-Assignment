import { useState } from 'react';
import './Movie.css';
import axios from 'axios';
import { SkeletonCard } from './Skeleton';




export const Movie=({img,name,year})=>{
const [data,setData]=useState({});
const [see,setSee]=useState(false);
const [load,setLoad]=useState(false);

function show(){
    setSee(true);
    setLoad(true)
    axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&t=${name}&type=movie`).then((res)=>{
setData(res.data);
setLoad(false);
console.log(res.data)
    }).catch((err)=>{
        console.log(err);
        setData([])
        setLoad(false);
    })
}

    return <div className="movie">
        <img src={img} alt="err" />
        <h2>{name}</h2>
        <h3>{name}</h3>
        <p>{year}</p>
        <button className="det" onClick={show}>Show More</button>
       { see? <div className='Modal'>
{load?<div><SkeletonCard width='200px' height={'300px'}/></div>:
<div>
  <img src={data.Poster} alt="err" /> 
   <div>
    <p>Cast  -  {data.Actors}</p>
    <p>Director - {data.Director}</p>
    <p>IMDb Rating  -  {data.imdbRating}</p>
    <p>Genre - {data.Genre}</p>
    <p>Released On - {data.Released}| Runtime - {data.Runtime}</p>
    <p>Overview - {data.Plot}</p>
   
    </div>
    <button className='close' onClick={()=>{setSee(false)}}>Close</button>
</div>}

       </div>:""}
    </div>
}