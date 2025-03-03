import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { FlatList } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
  movies?: Movie[]
  className?: string
}
const MovieGrid = ({ movies = [], className = '' }: Props) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      className={`${className}`}
      renderItem={({ item }) => (
        <MoviePoster id={item.id} title={item.title} poster={item.poster} />
      )}
      columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 8 }}
      contentContainerStyle={{ gap: 10, paddingBottom: 20 }}

      initialNumToRender={9}
      maxToRenderPerBatch={9}
      windowSize={5}
    />
  )
}

export default MovieGrid