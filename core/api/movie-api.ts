import axios from 'axios'

export const movieApi = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_MOVIE_DB_URL}/movie`,
    params: {
        languaje: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY
    }
})

export const genreApi = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_MOVIE_DB_URL}/genre`,
    params: {
        languaje: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY
    }
})
// https://api.themoviedb.org/3/discover
// 
// /movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28

export const discoverApi = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_MOVIE_DB_URL}/discover`,
    params: {
        languaje: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY
    }
})