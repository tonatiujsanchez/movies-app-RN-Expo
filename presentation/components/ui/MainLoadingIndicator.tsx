import { View, Text, ActivityIndicator } from 'react-native'

const MainLoadingIndicator = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator color={'blue'} size={42} />
      <Text className="mt-2">Cargando...</Text>
    </View>
  )
}

export default MainLoadingIndicator