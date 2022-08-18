import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/color'
import Ionicons from '@expo/vector-icons/Ionicons'

interface ProfileItemProps {
    title: string
    subtitle: string,
    onPress: () => void
}

const ProfileItem = ({icon, title, subtitle, onPress}: ProfileItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View className={'flex flex-row'}>
                <Ionicons name={icon} size={28} color={Colors.textColor}/>
                <Text className={'flex py-1 pl-3'}
                      style={styles.title}>{title}</Text>
                {/*<Text style={styles.subtitle}>{subtitle}</Text>*/}
            </View>
            <Ionicons style={styles.icon} name="ios-chevron-forward" size={20}/>
        </Pressable>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.borderColor,
        paddingBottom: 17,
        paddingTop: 17,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 11,
        color: Colors.textColor,
    },
    icon: {
        color: Colors.textColor,
    },
})
