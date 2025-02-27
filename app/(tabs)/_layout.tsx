import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff6600',
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#FFF'
        }
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="genres/index"
        options={{
          title: 'Generos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="albums-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout