import { View, Text } from 'react-native'
import React from 'react'
import { RouteTabView } from '@/infrastructure/interfaces/route-tabview.interface'
import { useMoviesByGenre } from '@/presentation/hooks/useMoviesByGenre'

interface Props {
  genre: RouteTabView
}
const GenreMoviesView = ({ genre }:Props) => {

  const { moviesByGenreQuery } = useMoviesByGenre({ genreId: genre.key })

  console.log(JSON.stringify(moviesByGenreQuery.data?.pages.flat(), null, 2))

  return (
    <View>
      <Text>CategoryMoviesView</Text>
      <Text>--- { genre.title } ---</Text>
    </View>
  )
}

export default GenreMoviesView