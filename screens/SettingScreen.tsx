import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import ProfileForm from '../components/Profile/ProfileForm'
import { ScrollView, StyleSheet } from 'react-native'
import Colors from '../constants/color'
const SettingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <ProfileForm />
      </ContainerView>
    </ScrollView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})