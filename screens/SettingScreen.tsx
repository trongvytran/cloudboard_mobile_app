import { View, Text } from 'react-native'
import React from 'react'
import LayoutView from '../components/Views/LayoutView'
import ContainerView from '../components/Views/ContainerView'
import ProfileForm from '../components/Profile/ProfileForm'
const SettingScreen = () => {
  return (
    <LayoutView>
      <ContainerView>
      <ProfileForm/>
      </ContainerView> 
    </LayoutView>
  )
}

export default SettingScreen