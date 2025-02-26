import { ScrollView } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'
import MovieHeader from '@/presentation/components/movie/MovieHeader'
import MovieDescription from '@/presentation/components/movie/MovieDescription'

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

  if (!movieDetailsQuery.data) {
    return <Redirect href={'/home'} />
  }

  const { title, originalTitle, backdrop, poster, rating, duration, description, budget } = movieDetailsQuery.data



  return (
    <ScrollView>
      <MovieHeader
        title={title}
        originTitle={originalTitle}
        poster={poster}
        backdrop={backdrop}
        rating={rating}
        duration={duration}
      />
      <MovieDescription
        description={description}
        budget={budget}
      />
    </ScrollView>
  )
}

export default MovieScreen