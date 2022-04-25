import { StyleSheet } from 'react-native'
import React from 'react'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'

const ProfileScreen = () => {
  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Profile</TitleText>
      </ContainerView>
    </LayoutView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
