import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import ProfileForm from '../components/Profile/ProfileForm'
import { ScrollView, StyleSheet } from 'react-native'
import Colors from '../constants/color'
import { useSelector } from 'react-redux'
const SettingScreen = () => {
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)

  function confirmHandler(data) {
    console.log(data)
    
  }

  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <ProfileForm 
        onSubmit={confirmHandler}
        defaultValues={userLoginInfo}/>
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