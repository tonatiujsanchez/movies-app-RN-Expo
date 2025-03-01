import { View } from 'react-native'
import { useMoviesByGenre } from '@/presentation/hooks/useMoviesByGenre'
import MovieGrid from '@/presentation/components/movies/MovieGrid'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'
import { RouteTabView } from '@/infrastructure/interfaces/route-tabview.interface'

interface Props {
  genre: RouteTabView
}
const GenreMoviesView = ({ genre }:Props) => {

  const { moviesByGenreQuery } = useMoviesByGenre({ genreId: genre.key })

  if (moviesByGenreQuery.isLoading) {
    return <MainLoadingIndicator />
  }

  return (
    <View className="mt-4">
      <MovieGrid
        movies={moviesByGenreQuery.data?.pages.flat() ?? []}
      />
    </View>
  )
}

export default GenreMoviesView