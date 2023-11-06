
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';


function App() {
  return (
    <div >
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     
      <Row isPresent={true} title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
    
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
    
      <Row title="Top Rated" fetchurl={requests.fetchTopRated}/>
    
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/>
    
      <Row title="Comedy Movie" fetchurl={requests.fetchComedyMovies}/>
    
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
    
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies}/>
    
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
