import React, {useLayoutEffect} from 'react'
import ContainerView from '../components/Views/ContainerView'
import ProfileForm from '../components/Profile/ProfileForm'
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from '../constants/color'
import {useSelector} from 'react-redux'
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation()
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)

    useLayoutEffect(() =>
        navigation.setOptions({
            headerTitle: 'Profile Settings',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="ios-arrow-back-outline"
                        size={30}
                        color={Colors.primaryColor}
                        style={{marginLeft: 10, marginRight: 10}}
                    />
                </TouchableOpacity>
            ),
        })
    )

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

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.layoutColor,
    },
})
