import { View, Text, FlatList } from 'react-native'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
  movies: Movie[]
}
const MovieHorizontalList = ({ movies }: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            title={item.title}
            poster={item.poster}
          />
        )}
      />
    </View>
  )
}

export default MovieHorizontalList