import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface SectionHeadingProps {
  name: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  name,
}: SectionHeadingProps) => {
  const navigation = useNavigation()
  return (
    <View className="flex flex-row items-center justify-between mx-4 mt-6">
      <Text className="text-lg font-bold">{name}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SeeMoreBillboardListScreen' as never)
        }
      >
        <Text className="font-medium text-amber-500">See more</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeading
