import Row from "./components/row"
import React from "react";
import requests from "./components/requests"
import Banner from "./components/banner"
import Nav from "./components/navbar"

function App() {
  
  return (
    <div className="container">
      <Nav/>
       <Banner />
       
       <Row title="Trending" fetchUrl={requests.fetchTrending}  isLargeRow={false}/>
       <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  isLargeRow={false}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  isLargeRow={false}/>
       <Row title="Documetaries" fetchUrl={requests.fetchDocumantaries} isLargeRow={false} />
    </div>
  )
}

export default App;
