import { View, Text } from 'react-native'
import React from 'react'
import { currencyFormatUSD } from '@/config/helpers/formatters'

interface Props {
  description: string
  budget: number
}
const MovieDescription = ({ description, budget }: Props) => {
  return (
    <View className="px-4">
      <View>
        <Text className="font-bold text-2xl mb-1">Hisotria</Text>
        <Text className="text-lg text-gray-700">{description}</Text>
      </View>
      <View className="mt-6">
        <Text className="font-bold text-2xl mb-1">Presupuesto</Text>
        <Text className="text-lg text-gray-700">{currencyFormatUSD(budget)}</Text>
      </View>
    </View>
  )
}

export default MovieDescription