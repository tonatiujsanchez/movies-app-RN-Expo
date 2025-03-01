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

export const discoverApi = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_MOVIE_DB_URL}/discover`,
    params: {
        languaje: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY
    }
})