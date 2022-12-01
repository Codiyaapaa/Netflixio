import "./banner.css";
import React from "react";
import axios from "./axios";
import requests from "./requests";
function Banner() {
    const [movie,setMovie] = React.useState([]);
    React.useEffect(()=> {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request.data.results[0]);
        setMovie(request.data.results[ 
          Math.floor((Math.random() * 20) + 1)
        ])
        
      }
      fetchData();
    },[])
    // function truncate(str, max) {
    //   return str.length > max ? str.substr(0, max-1) + '…' : str;
    // }
    console.log(movie);
    return (
        <header className="banner" style={{
          backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition : "cover cover"
        }}>
          <div className="banner-content">
            <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner-buttons">
              <button className="banner-button">Play</button>
              <button className="banner-button"> My List</button>
            </div>
            <h3 className="banner-description">{movie?.overview}</h3>
          </div>
            <div className="banner-fadebottom"/>
        </header>
    )
}
export default Banner;