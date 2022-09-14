import React from 'react'
import { Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LayoutView = ({ children }: any) => {
  const handleUnhandledTouches = () => {
    Keyboard.dismiss()
    return false
  }

  return (
    <SafeAreaView
      onStartShouldSetResponder={handleUnhandledTouches}
      edges={['right', 'left', 'top']}
      className="flex-1 bg-white"
    >
      {children}
    </SafeAreaView>
  )
}

export default LayoutView

