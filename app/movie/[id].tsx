import { ScrollView } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'
import MovieHeader from '@/presentation/components/movie/MovieHeader'
import MovieDescription from '@/presentation/components/movie/MovieDescription'
import { useCast } from '@/presentation/hooks/useCast'
import MovieCast from '@/presentation/components/movie/MovieCast'
import { useFavoriteMovies } from '@/presentation/hooks/useFavoriteMovies'

type LocalSearchParams = {
  id: string
}
const MovieScreen = () => {

  const { id } = useLocalSearchParams<LocalSearchParams>()
  const { addMovieToFavorites } = useFavoriteMovies()


  if (!id) {
    return <Redirect href={'/home'} />
  }

  const { movieDetailsQuery } = useMovie({ id })
  const { castQuery } = useCast({ movieId: id })

  if (movieDetailsQuery.isLoading) {
    return <MainLoadingIndicator />
  }

  if (!movieDetailsQuery.data) {
    return <Redirect href={'/home'} />
  }

  const { title, originalTitle, backdrop, poster, rating, duration, description, budget } = movieDetailsQuery.data

  const handleAddMovieToFavorites = () => {
    addMovieToFavorites(movieDetailsQuery.data)
  }

  return (
    <ScrollView>
      <MovieHeader
        title={title}
        originTitle={originalTitle}
        poster={poster}
        backdrop={backdrop}
        rating={rating}
        duration={duration}
        onAddMovieToFavorites={handleAddMovieToFavorites}
      />
      <MovieDescription
        description={description}
        budget={budget}
      />
      <MovieCast
        cast={castQuery.data || []}
      />
    </ScrollView>
  )
}

export default MovieScreen