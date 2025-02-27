import { useEffect, useRef } from 'react'
import { View, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import MoviePoster from '@/presentation/components/movies/MoviePoster'
import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
  movies: Movie[]
  loadNextPage?: () => void
  className?: string
}
const MovieHorizontalList = ({ movies, className = '', loadNextPage }: Props) => {

  const isLoading = useRef(false)

  useEffect(()=>{
    setTimeout(() => {
      isLoading.current = false
    }, 200);
  },[movies])

  const onScroll = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) {
      return
    }

    const { contentOffset, layoutMeasurement, contentSize } = ev.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 500) >= contentSize.width

    if (!isEndReached) {
      return
    }

    isLoading.current = true
    
    loadNextPage && loadNextPage()
  }

  return (
    <View className={`mb-4 ${className}`}>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => `${item.id}-${idx}`}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            title={item.title}
            poster={item.poster}
          />
        )}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList