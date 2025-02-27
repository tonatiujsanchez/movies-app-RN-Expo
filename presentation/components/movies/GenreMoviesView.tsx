import { View, Text } from 'react-native'
import React from 'react'
import { RouteTabView } from '@/infrastructure/interfaces/route-tabview.interface'

interface Props {
  genre: RouteTabView
}
const GenreMoviesView = ({ genre }:Props) => {
  return (
    <View>
      <Text>CategoryMoviesView</Text>
      <Text>--- { genre.title } ---</Text>
    </View>
  )
}

export default GenreMoviesView