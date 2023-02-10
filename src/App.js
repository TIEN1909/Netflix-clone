import React from 'react'
import Row from "./Row"
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
        <Row isLargeRow title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaties" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}
export default App;
