import React, { useEffect, useState } from 'react';
import axios from './axios.jsx';
import './row.css';

const baseurl = "https://image.tmdb.org/t/p/original/";

const Row = (props)=>{
    const [movies,setMovies] = useState([]); 
    
    useEffect(()=>{
        async function fetchData(){

            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchURL]);
    // console.log(movies);

    return(<>
        <div className ='row'>
            {/* Title */}
            <h2>{props.title}</h2>
            {/* Container - posters */} 
            <div className = 'row_posters'>
                {movies.map((values) =>{
                  return(<>
        
                      <img
                          key={values.id}
                          className={`row_poster ${props.isLarge && "row_posterLarge"}`}
                          src={`${baseurl}${ values.poster_path}`}
                          alt={values.name}
                          
                        />
                  </>)  
                })}
            </div>
        </div>
    </>);

}

export default Row;