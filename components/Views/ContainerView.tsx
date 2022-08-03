import React from 'react'
import { View } from 'react-native'

interface ContainerViewProps {
  children: JSX.Element[] | JSX.Element
}

const ContainerView = ({ children }: ContainerViewProps) => {
  return <View className="p-4">{children}</View>
}

export default ContainerView

