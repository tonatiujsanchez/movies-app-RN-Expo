import { useState } from 'react'
import { Pressable, Text, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import CategoryMoviesView from '@/presentation/components/movies/CategoryMoviesView'


const GenresScreen = () => {

  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: "segunda", title: "Segunda" },
    { key: "popular", title: "Populares" },
    { key: "top_rated", title: "Mejor Valoradas" },
    { key: "upcoming", title: "Próximamente" },
  ])

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
      // swipeEnabled={false}
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
          // tabStyle={{ width: 145 }}
          renderTabBarItem={({ route }) => {

            const activeIndex = routes.findIndex(r => r.key === route.key)

            return (
              <Pressable
                key={route.key}
                onPress={() => setIndex(activeIndex)}
                className="mx-1"
                style={{
                  backgroundColor: activeIndex === index ? "#ff6600" : "#FFF", // Color dinámico
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 20,
                  marginHorizontal: 5,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#c7c7c7',
                }}>
                <Text style={{
                  color: activeIndex === index ? "#fff" : "#222",
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