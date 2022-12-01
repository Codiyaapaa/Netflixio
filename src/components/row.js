import React from "react";
import Youtube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./row.css"
const base_url = "https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl,isLargeRow}) {
    const[movies,setMovies] = React.useState([]);
    const[trailerUrl,setTrailerUrl] = React.useState();
    React.useEffect(()=> {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results);
        setMovies(request.data.results);
      }
      fetchData();
    },[fetchUrl])
    const handleClick = (movie) => {
        
          movieTrailer(movie?.title || movie?.name || movie?.original_name)
           .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
           });
          console.log(trailerUrl);
         
    }
    const closeTrailer = () => {
      setTrailerUrl();
    }
    const opts = {
      height:300,
      width:600,
      playerVars: {
         autoplay:0,
      },
    };
    return (
        <div className="row">
          <h2 className="row-title">{title}</h2>
          <div className="row-posters " >
            {movies.map(movie => {
                return <img key={movie.id} onClick={()=> handleClick(movie)}className={`row-poster ${isLargeRow && "row-large"}`} src={`${base_url}${isLargeRow ? movie.backdrop_path : movie.poster_path}`} alt="poster" />
            })}
          </div>
          
             {trailerUrl && <div className="row-trailer"><div className="row-video"><Youtube videoId={trailerUrl} opts={opts}/></div><button className="row-close" onClick={()=> closeTrailer()} >X</button> </div> }
          </div>
          )
}
export default Row;