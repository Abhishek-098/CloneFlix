import React from 'react';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import './app.css';
import Nav from './Nav';


const App =() =>{
    return (<>
        <div className="app">
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchOriginal} isLarge={true}/>
        <Row title="Trending Now" fetchURL={request.fetchTrending} />
        <Row title="Top Rated" fetchURL={request.fetchToprated} />
        {/* <Row title="Action Movies" fetchURL={request.fetchActionMovies} /> */}
        <Row title="Comedy Movies" fetchURL={request.fetchComdeyMovies} />
        {/* <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} /> */}
        <Row title="Romantic Movies" fetchURL={request.fetchRomanticMovies} />
        <Row title="Documentries" fetchURL={request.fetchDocumantries}/>
        </div>
        </>
    );
}
export default App;