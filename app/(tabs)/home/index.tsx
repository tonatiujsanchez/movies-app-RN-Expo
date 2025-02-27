import { View, Text, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlatingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

  if (nowPlatingQuery.isFetching) {
    return <MainLoadingIndicator />
  }


  return (
    <ScrollView>
      <View
        className="mt-3 pb-10"
        style={{ paddingTop: safeArea.top }}
      >
        <Text className="text-3xl font-bold px-2 mb-2">Peliculas</Text>
        <MainSlideshow
          movies={nowPlatingQuery.data ?? []}
        />

        <Text className="text-2xl font-bold px-2 mb-2">Populares</Text>
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
        />
        <Text className="text-2xl font-bold px-2 mb-2">Mejor calificadas</Text>
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <Text className="text-2xl font-bold px-2 mb-2">Proximamente</Text>
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen