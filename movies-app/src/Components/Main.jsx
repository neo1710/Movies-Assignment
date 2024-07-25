import React, { useEffect, useState } from "react"
import './Main.css';
import axios from "axios";
import { Movie } from "./Movie";
import { SkeletonCard } from "./Skeleton";



export const Main=()=>{
    const [data,setData]=useState([]);
    const [load,setLoad]=useState(false);
    const [inp,setInp]=useState("");

    useEffect(()=>{
        setLoad(true)
   axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&s=%22harry%20potter%22&type=movie`).then((res)=>{
setData(res.data.Search);
setLoad(false)
   }).catch((err)=>{
console.log(err);
setLoad(false)
   })
},[])


function search(e){  //search button function to get search results
   e.preventDefault();
setLoad(true);
    axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&s=${inp}&type=movie`).then((res)=>{
       
       if(res.data.Response==="True"){ 
        setData(res.data.Search);
    }else{
            setData([]);
        }
        console.log(res.data)
        setLoad(false);
    }).catch((err)=>{
        console.log(err);
        setLoad(false);
        setData([])
    })
}

    return <div className="main">
      
    <div className="search">
        <input className="searchI" value={inp} onChange={(e)=>{ setInp(e.target.value);}}
         type="text" placeholder="Search Your Movies..." />
         <button onClick={(e)=>{search(e)}} className="searchB">{load?"Loading...":"Search"}</button>
    </div>
   { data.length===0?"No Results Found":
<div className="movies">
    {load?  (<React.Fragment>
          <SkeletonCard width="200px" height="300px" />
          <SkeletonCard width="200px" height="300px" />
          <SkeletonCard width="200px" height="300px" />
          <SkeletonCard width="200px" height="300px" />
          <SkeletonCard width="200px" height="300px" />
          <SkeletonCard width="200px" height="300px" />
        </React.Fragment>):data.map((ele,i)=>(
<Movie key={i} name={ele.Title} year={ele.Year} img={ele.Poster} />
    ))}
</div>
}
<div className="page">
    <button>Prev</button> {1} <button>Next</button>
</div>
    </div>
}