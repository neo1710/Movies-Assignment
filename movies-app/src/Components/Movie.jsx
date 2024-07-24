import './Movie.css';




export const Movie=({img,name,year})=>{



    return <div className="movie">
        <img src={img} alt="err" />
        <h2>{name}</h2>
        <h3>{year}</h3>
        <button className="det">Show Details</button>
    </div>
}