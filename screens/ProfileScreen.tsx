import { StyleSheet, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import { clearAccessToken } from '../features/auth/accessTokenSlice'

const ProfileScreen = () => {
  const { accessToken } = useSelector((state: any) => state.accessToken)
  const dispatch = useDispatch()
  const validateUser = accessToken ? (
    <View>
      <Text>Logged</Text>
      <Button
        onPress={() => {
          dispatch(clearAccessToken())
        }}
        title="Log out"
      />
    </View>
  ) : (
    <View>
      <GoogleView />
      <FacebookView />
    </View>
  )
  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Profile</TitleText>
        {validateUser}
      </ContainerView>
    </LayoutView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
