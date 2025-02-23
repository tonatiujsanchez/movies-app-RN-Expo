import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, ActivityIndicator } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlatingQuery } = useMovies()

  if (nowPlatingQuery.isFetching) {
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
      <Text className="text-2xl font-bold px-2 mb-2">Movies</Text>
      <MainSlideshow
        movies={nowPlatingQuery.data ?? []}
      />
    </View>
  )
}

export default HomeScreen