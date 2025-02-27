import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  category: string
}
const CategoryMoviesView = ({ category }:Props) => {
  return (
    <View>
      <Text>CategoryMoviesView</Text>
      <Text>--- { category } ---</Text>
    </View>
  )
}

export default CategoryMoviesView