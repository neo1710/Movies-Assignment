import React, { useEffect, useState } from "react"
import './Main.css';
import axios from "axios";
import { Movie } from "./Movie";
import { SkeletonCard } from "./Skeleton";



export const Main=()=>{
    const [data,setData]=useState([]);
    const [load,setLoad]=useState(false);
    const [inp,setInp]=useState("");
    const [s,setS]=useState("Harry Potter");
    const [page,setPage]=useState(1);
    const [selectedOption, setSelectedOption] = useState('movie');
    const [year,setYear]=useState("");
  
useEffect(()=>{
        setLoad(true)
        axios.get(`https://www.omdbapi.com/?apikey=bd5976ba&s=${s}&type=${selectedOption}&page=${page}&y=${year}`).then((res)=>{
       
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
},[s,year,page,selectedOption])

const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


function search(e){  //search button function to get search results
   e.preventDefault();
setS(inp);
}


    return <div className="main">
      <h2>EXPLORE MOVIES</h2>
    <div className="search">
        <input className="searchI" value={inp} onChange={(e)=>{ setInp(e.target.value);}}
         type="text" placeholder="Search Your Movies..." />
         <button onClick={(e)=>{search(e)}} className="searchB">{load?"Loading...":"Search"}</button>
    </div>
   <div className="pop">
    <div className="sidebar">
   
    <div style={{width:"100%"}} className="filter1">
      <input type="radio" value="movie" 
      checked={selectedOption === 'movie'} onChange={handleRadioChange}   />
      <label htmlFor="movie">MOVIES</label>
      <br />
      <input type="radio" value="series"
       checked={selectedOption === 'series'} onChange={handleRadioChange} />
      <label htmlFor="series">SERIES</label>
      <br />
      <input type="radio" value="episode"
       checked={selectedOption === 'episode'} onChange={handleRadioChange} />
      <label htmlFor="episode">EPISODE</label>
    </div>
    <div className="filter2">
        <label htmlFor="select">FILTER WITH YEAR</label>
        <br />
        <select value={year} onChange={(e)=>{setYear(e.target.value)}} className="select" >
            <option value="">Choose Year</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
        </select>
    </div>
    </div>
    { data.length===0&&!load? <h1>"No Results Found, Please Check Your Input"</h1>:
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
</div>
<div style={{color:"black",marginTop:"20px",padding:"5px",fontWeight:"bold"}} className="page">
    <button disabled={page===1?true:false} 
    onClick={()=>{setPage(page-1)}}>Prev</button> {page} <button onClick={()=>{setPage(page+1)}} >Next</button>
</div>
    </div>
}