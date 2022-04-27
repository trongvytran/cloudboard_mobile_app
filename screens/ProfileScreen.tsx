import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'

const ProfileScreen = () => {
  const { accessToken } = useSelector((state: any) => state.accessToken)
  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Profile</TitleText>
        <Text>{accessToken}</Text>
        <GoogleView />
      </ContainerView>
    </LayoutView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
