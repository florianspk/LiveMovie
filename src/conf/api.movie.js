import * as axios from "axios";

const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/4"
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMThkM2JhZmNlZTI0YzQ1MGFhYmM3NzAxNmMxMWE5ZiIsInN1YiI6IjVlYzdlOGViZTYzNTcxMDAyMmNmYzM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._x5ADhoW-tdGyYBM7x7Hf4F4-i8WiTyjRtUX4gCGKAs'
    return req;
})

export default apiMovie;

export const  apiMovieMap = ( m ) => ( {
    img: `https://image.tmdb.org/t/p/w500/${m.poster_path}`,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count} votes)`,
    description: m.overview
})