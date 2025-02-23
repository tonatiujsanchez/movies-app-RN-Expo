import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import "@/global.css"

// Create a client de tanstack/react-query
const queryClient = new QueryClient()

const RootLayout = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFF'
          }
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout