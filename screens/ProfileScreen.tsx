import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import { clearAccessToken } from '../features/auth/accessTokenSlice'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileItem from '../components/Profile/ProfileItem'

const ProfileScreen = ({ navigation }: any) => {
  const DATA = [
    { id: 1, title: 'My billboards', subtitle: 'Already have 5 billboards' },
    { id: 2, title: 'Payment methods', subtitle: 'Visa **89' },
    { id: 3, title: 'Settings', subtitle: 'Notifications, password' },
  ]
  const { accessToken } = useSelector((state: any) => state.accessToken)
  const dispatch = useDispatch()
  const validateUser = !accessToken ? (
    <View>
      <ProfileCard name="Hoang An Le Ba" email="hoanganleba@gmail.com" />
      <FlatList
        scrollEnabled={false}
        data={DATA}
        renderItem={({ item }) => (
          <ProfileItem
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate(item.title)}
          />
        )}
        keyExtractor={(item) => item.id}
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
