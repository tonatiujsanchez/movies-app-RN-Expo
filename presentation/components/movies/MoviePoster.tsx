import { Text, Pressable, Image } from 'react-native'


const posterSizes = {
  small: {
    width: 100,
    height: 170,
    classWidthText: 'w-[100px]',
  },
  large: {
    width: 150,
    height: 250,
    classWidthText: 'w-[140px]',
  }
}

interface Props {
  id: number
  poster: string
  title: string
  size?: 'small' | 'large'
  className?: string
}
const MoviePoster = ({ id, poster, title, size = 'small', className = '' }: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: posterSizes[size].width,
          height: posterSizes[size].height,
          resizeMode: 'cover'
        }}
      />
      <Text className={`text-center font-bold ${ posterSizes[size].classWidthText }`}>{title}</Text>
    </Pressable>
  )
}

export default MoviePoster