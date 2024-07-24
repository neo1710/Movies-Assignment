import { useEffect, useState } from "react"
import './Main.css';
import axios from "axios";
import { Movie } from "./Movie";



export const Main=()=>{
    const [data,setData]=useState([]);
    const [inp,setInp]=useState("");

    useEffect(()=>{
   axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&s=%22harry%20potter%22&type=movie`).then((res)=>{
setData(res.data.Search);

   }).catch((err)=>{
console.log(err);
   })
    },[])
    console.log(data);


function search(e){
   e.preventDefault();

    axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&s=${inp}&type=movie`).then((res)=>{
        setData(res.data.Search);
    }).catch((err)=>{
        console.log(err);
    })
}

    return <div className="main">
    <div className="search">
        <input className="searchI" value={inp} onChange={(e)=>{ setInp(e.target.value);}}
         type="text" placeholder="Search Your Movies..." />
         <button onClick={(e)=>{search(e)}} className="searchB">Search</button>
    </div>

<div className="movies">
    {data.map((ele,i)=>(
<Movie key={i} name={ele.Title} year={ele.Year} img={ele.Poster} />
    ))}
</div>
<div className="page">
    <button>Prev</button> {1} <button>Next</button>
</div>
    </div>
}