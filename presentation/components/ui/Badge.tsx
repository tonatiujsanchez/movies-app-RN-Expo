import { ReactNode } from 'react'
import { View, Text } from 'react-native'

interface Props {
  children: ReactNode
  className?: string
}
const Badge = ({ children, className }: Props) => {
  return (
    <View className={`flex-row items-center px-2 py-1 gap-1 rounded-full bg-zinc-300 border border-zinc-400 ${ className }`}>
      <Text className="font-bold text-zinc-900">{children}</Text>
    </View>
  )
}

export default Badge