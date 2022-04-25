import { Keyboard, StyleSheet } from 'react-native'
import React from 'react'
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
      style={styles.container}
    >
      {children}
    </SafeAreaView>
  )
}

export default LayoutView

const styles = StyleSheet.create({
  container: {
    paddingTop: 47,
    backgroundColor: '#ffffff',
    flex: 1,
  },
})
