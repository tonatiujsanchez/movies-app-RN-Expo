import { router } from 'expo-router'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";

interface Props {
  title: string
  originTitle: string
  poster: string
  backdrop?: string
  rating: number
  duration: number
  onAddMovieToFavorites: () => void
  isFavorite: boolean
}
const MovieHeader = ({ title, originTitle, poster, rating, duration, onAddMovieToFavorites, isFavorite }: Props) => {

  const { height: screenHeight } = useWindowDimensions()

  return (
    <>
      <View className="absolute top-0 left-0 pt-3 z-10">
        <Pressable
          onPress={() => router.back()}
          className="ml-3"
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={'#FFF'}
          />
        </Pressable>
      </View>
      <View
        className="shadow-xl shadow-black/20"
        style={{
          height: screenHeight * 0.70
        }}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: screenHeight * 0.30,
            zIndex: 1,
          }}
        />
        <View className="flex-1">
          <Image
            source={{ uri: poster }}
            alt={title}
            className="flex-1"
            style={{
              resizeMode: 'cover'
            }}
          />
        </View>
      </View>

      <BlurView
        intensity={100}
        tint="light"
        className="-mt-52 p-4"
        style={{
          width: '100%',
          height: 'auto',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          overflow: "hidden",
        }}>
        <View
          className="rounded-tr-3xl rounded-tl- p-4 pb-6 border-b border-zinc-400"
        >
          <Text className="font-bold text-3xl text-center">{title}</Text>
          <Text className="text-gray-700 text-center">{originTitle}</Text>
        </View>
        <View className="flex-row justify-between py-6">
          <View className="flex-row gap-3">
            <View className="flex-row items-center px-2 py-1 gap-1 rounded-full bg-zinc-300 border border-zinc-400">
              <Text className="font-bold text-zinc-900">{duration} min</Text>
            </View>
            <View className="flex-row items-center px-2 py-1 gap-1 rounded-full bg-zinc-300 border border-zinc-400">
              <Ionicons
                name="star"
                color={'#E3A407'}
                size={14}
              />
              <Text className="font-bold text-zinc-900">{rating}</Text>
            </View>
          </View>
          <View className="flex-row gap-3">
            <Pressable
              onPress={() => router.back()}
              className="ml-3"
            >
              <Ionicons
                name="share-social"
                size={28}
              />
            </Pressable>
            <Pressable
              onPress={onAddMovieToFavorites}
              className="ml-3"
            >
              <Ionicons
                name={isFavorite ? 'heart-sharp' : 'heart-outline'}
                size={28}
              />
            </Pressable>
          </View>
        </View>
      </BlurView>
    </>
  )
}

export default MovieHeader