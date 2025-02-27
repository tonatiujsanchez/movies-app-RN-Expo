import { useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import { Pressable, Text, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { useGenres } from '@/presentation/hooks/useGenres'
import CategoryMoviesView from '@/presentation/components/movies/CategoryMoviesView'
import MainLoadingIndicator from '@/presentation/components/ui/MainLoadingIndicator'
import { Genre } from '@/infrastructure/interfaces/moviedb-movie-response'
import { RouteTabView } from '@/infrastructure/interfaces/route-tabview.interface'
import { RouteTabViewMapper } from '@/infrastructure/mappers/route-tabview.mapper'

const genresToRoutes = (genres: Genre[]): RouteTabView[] => {
  return genres.map(RouteTabViewMapper.fromTheMovieDBGenreToRouteTabView)
}

const GenresScreen = () => {

  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const { genresQuery } = useGenres()

  const [routes, setRoutes] = useState<RouteTabView[]>([])

  useEffect(() => {
    if (genresQuery.data) {
      setRoutes(genresToRoutes(genresQuery.data))
    }
  }, [genresQuery.data])


  if (genresQuery.isLoading) {
    return <MainLoadingIndicator />
  }

  if (!genresQuery.data) {
    return <Redirect href='/(tabs)/home' />
  }

  if (routes.length === 0) {
    return <MainLoadingIndicator />
  }

  const views = routes.reduce((obj: { [key: string]: React.ComponentType<unknown> }, route) => {
    obj[route.key] = () => <CategoryMoviesView category={route.key} />
    return obj
  }, {})

  const renderScene = SceneMap({
    ...views,
  })


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy
      lazyPreloadDistance={0}
      style={{
        paddingVertical: 10,
        shadowOpacity: 0
      }}
      renderTabBar={props => (
        <TabBar
          {...props}
          scrollEnabled={true}
          indicatorStyle={{ backgroundColor: "none" }}
          indicatorContainerStyle={{ boxShadow: 'none' }}
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 10,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0, 0.1)",
            marginBlockEnd: 10,
          }}
          tabStyle={{ width: 5.52 * routes.length }}
          renderTabBarItem={({ route }) => {

            const isActiveIndex = routes.findIndex(r => r.key === route.key)

            return (
              <Pressable
                key={route.key}
                onPress={() => setIndex(isActiveIndex)}
                className="mx-1"
                style={{
                  backgroundColor: isActiveIndex === index ? "#ff6600" : "#FFF",
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 20,
                  marginHorizontal: 5,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#c7c7c7',
                }}>
                <Text style={{
                  color: isActiveIndex === index ? "#fff" : "#222",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}>
                  {route.title}
                </Text>
              </Pressable>
            )
          }}
        />
      )}
    />
  )
}

export default GenresScreen