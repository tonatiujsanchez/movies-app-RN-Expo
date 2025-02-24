import { useRef } from 'react';
import { View, useWindowDimensions } from 'react-native'
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from '@/presentation/components/movies/MoviePoster';
import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
  movies: Movie[]
}
const MainSlideshow = ({ movies }:Props) => {

  const carouselRef = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width

  return (
    <View className="w-full h-250px">
      <Carousel
        ref={carouselRef}
        data={ movies }
        width={230}
        height={300}
        renderItem={({ item })=>(
          <MoviePoster 
            id={ item.id }
            poster={ item.poster }
            title={item.title}
            size="large"
          />
        )}
        style={{
          width,
          height: 340,
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow