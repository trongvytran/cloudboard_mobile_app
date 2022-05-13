import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import Card from '../components/Card'
import ContainerView from '../components/Views/ContainerView'
import HeaderView from '../components/HeaderBar'

const HomeScreen = () => {
  return (
   <LayoutView>
      <ContainerView>
        <TitleText>Find Your Billboard</TitleText>
        <Card />
        <Card />
        <Card />
      </ContainerView>
      </LayoutView>
  )

}

export default HomeScreen

const styles = StyleSheet.create({})
