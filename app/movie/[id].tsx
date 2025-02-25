import { View, Text, ScrollView } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'

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
    return <MainLoadingIndicator /> 
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