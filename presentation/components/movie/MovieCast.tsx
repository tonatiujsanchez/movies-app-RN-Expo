import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { View, Text, FlatList } from 'react-native'
import { ActorCard } from './ActorCard'

interface Props {
  cast: Cast[]
  className?: string
}
const MovieCast = ({ cast, className = '' }: Props) => {
  return (
    <View className={`mt-6 mb-10 ${className}`}>
      <Text className="font-bold text-2xl mb-4 px-4">Actores</Text>
      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => `${item.id}-${idx}`}
        renderItem={({ item }) => (
          <ActorCard
            actor={item}
          />
        )}
      />
    </View>
  )
}

export default MovieCast