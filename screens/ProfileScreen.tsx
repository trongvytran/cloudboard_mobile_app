import {useDispatch, useSelector} from 'react-redux'
import {View, Text, Alert, VirtualizedList, TouchableOpacity, Image} from 'react-native'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileItem from '../components/Profile/ProfileItem'
import React from 'react'
import {clearUserLoginInfo} from '../features/auth/userLoginInfo'

const ProfileScreen = ({navigation}: any) => {
    const DATA = [
        {
            id: 1,
            icon: "glasses-outline",
            title: 'My billboards',
            screenName: 'ProfileNavigator',
            screen: 'MyBillboardScreen'
        },
        {
            id: 2,
            icon: 'card-outline',
            title: 'Payment methods',
            screenName: 'ProfileNavigator',
            screen: 'PaymentMethodScreen',
            subtitle: 'Visa **89'
        },
        {id: 3, icon: "settings-outline", title: 'Settings', screenName: 'ProfileNavigator', screen: 'SettingsScreen'},
    ]
    const dispatch = useDispatch()

    const getItem = (data, index) => (
        data[index]
    )

    const handleSignOut = () => {
        Alert.alert('Are you sure you want to log out?', '', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Sign Out',
                onPress: () => {
                    dispatch(clearUserLoginInfo())
                },
            },
        ])
    }

    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
    const validateUser = userLoginInfo ? (
        <View>
            <ProfileCard
                imageSource={userLoginInfo.imageUrl}
                name={userLoginInfo.name}
                email={userLoginInfo.email}
            />
            <VirtualizedList
                scrollEnabled={false}
                data={DATA}
                renderItem={({item}) => (
                    <ProfileItem
                        //@ts-ignore
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        onPress={() => navigation.navigate('My Profile', {screen: item.screen})}
                    />
                )}
                getItem={getItem}
                getItemCount={(data) => data.length}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity
                onPress={handleSignOut}
                className="bg-red-500 mt-6 rounded-lg px-5 py-3.5 shadow flex justify-center items-center"
            >
                <Text className="text-xl font-semibold text-center text-white">Sign Out</Text>
            </TouchableOpacity>
        </View>
    ) : (
        <View>
            <View className={'flex justify-center items-center mt-5 mb-10'}>
                <Text className={'text-center font-bold text-[#fd7904]'}>SIGN IN WITH</Text>
                <Image
                    style={{width: '60%', height: 50, resizeMode: 'contain'}}
                    source={require('../assets/img/cloudboard.png')}/>
                <Text className={'text-center font-semibold text-[#fd7904]'}>ACCOUNT</Text>
            </View>
            <GoogleView/>
            <FacebookView/>
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
