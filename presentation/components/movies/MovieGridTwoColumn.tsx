import { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
  movies?: Movie[]
  className?: string
}
const MovieGridTwoColumn = ({ movies = [], className = '' }: Props) => {

  const [textHeight, setTextHeight] = useState(0);

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth / 2) - 15;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      className={`mb-10 ${className}`}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          className={`active:opacity-90`}
          onPress={() => router.push(`/movie/${item.id}`)}
          style={{
            width: itemWidth,
            aspectRatio: 2 / 3,
            marginBottom: textHeight
          }}
        >
          <Image
            source={{ uri: item.poster }}
            className="shadow-lg rounded-2xl"
            style={{
              height: '92%',
              resizeMode: 'cover',
            }}
          />
          <Text
            className={`text-center font-bold text-lg mt-1`}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setTextHeight(height);
            }}
          >
            {item.title}
          </Text>
        </Pressable>
      )}
      columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  )
}

export default MovieGridTwoColumn