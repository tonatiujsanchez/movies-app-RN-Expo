import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, ActivityIndicator } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlatingQuery, popularQuery, topRatedQuery } = useMovies()

  if (
      nowPlatingQuery.isFetching || 
      popularQuery.isFetching ||
      topRatedQuery.isFetching
    ) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={'blue'} size={42} />
      </View>
    )
  }

  return (
    <View
      className="mt-2"
      style={{ paddingTop: safeArea.top }}
    >
      <Text className="text-3xl font-bold px-2 mb-2">Peliculas</Text>
      <MainSlideshow
        movies={nowPlatingQuery.data ?? []}
      />

      <Text className="text-2xl font-bold px-2 mb-2">Populares</Text>
      <MovieHorizontalList
        movies={ popularQuery.data ?? [] }
      />
      <Text className="text-2xl font-bold px-2 mb-2">Mejor calificadas</Text>
      <MovieHorizontalList
        movies={ topRatedQuery.data ?? [] }
      />
    </View>
  )
}

export default HomeScreen