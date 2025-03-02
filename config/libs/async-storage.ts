import AsyncStorage from "@react-native-async-storage/async-storage"


export const setStoreData = async (key: string, value:string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

export const getStorageData = async ( key:string ):Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.log(e)
    return null
  }
}
