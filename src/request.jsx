const API_KEY = "3fe3ede1ceb64b57d52c8e81e9d3bf3a";

const request ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks =213`,
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComdeyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantries: `/discover/tv?api_key=${API_KEY}&with_genres=99`
 }

 export default request;