import { useCallback, useEffect, useState } from "react"
import { getStorageData, setStoreData } from "@/config/libs/async-storage"
import { Movie } from "@/infrastructure/interfaces/movie.interface"
import { useFocusEffect } from "@react-navigation/native"

const FAVORITE_MOVIES_STORAGE_KEY = 'favorite-movies-app'

export const useFavoriteMovies = () => {

  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  useFocusEffect(
    useCallback(() => {
      getFavoriteMovies(); // Se ejecuta cada vez que la pantalla es enfocada
    }, [])
  );
  const addMovieToFavorites = async (movie: Movie) => {
    const existeMovie = favoriteMovies.some( m => m.id === movie.id )
    let moviesUpdated = []
    if(existeMovie){
      moviesUpdated = favoriteMovies.filter( m=> m.id !== movie.id )
    }else {
      moviesUpdated = [...favoriteMovies, movie]
    }
    try {
      await setStoreData(FAVORITE_MOVIES_STORAGE_KEY, JSON.stringify(moviesUpdated))

    } catch (error) {
      console.log(error)
    }
  }

  const getFavoriteMovies = async () => {

    try {
      const moviesStorage = await getStorageData(FAVORITE_MOVIES_STORAGE_KEY)
      const parsedMovies = moviesStorage && moviesStorage !== '' ? JSON.parse(moviesStorage) : [];

      setFavoriteMovies(parsedMovies)

    } catch (error) {
      console.log(error)
      return []
    }
  }

  return {
    favoriteMovies,
    addMovieToFavorites,
  }
}
