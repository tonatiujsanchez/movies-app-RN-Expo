import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'

type LocalSearchParams = {
  id: string
}
const MovieScreen = () => {

  const { id } = useLocalSearchParams<LocalSearchParams>()

  if (!id) {
    return <Redirect href={'/home'} />
  }

  const { movieDetailsQuery } = useMovie({ id })

  if (movieDetailsQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={'blue'} size={42} />
        <Text className="mt-2">Cargando...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View>
        <Text>{movieDetailsQuery.data?.title}</Text>
      </View>
    </ScrollView>
  )
}

export default MovieScreen