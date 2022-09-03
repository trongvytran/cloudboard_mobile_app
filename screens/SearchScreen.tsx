import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import Colors from '../constants/color'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import SearchBillboardDataList from '../components/Search/SearchBillboardDataList'
import axios from 'axios'
import BaseUrl from '../constants/baseUrl'
import DelayInput from 'react-native-debounce-input'

const SearchScreen = () => {
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width - 70
    const [data, setData] = useState([])

    const searchData = async (searchValue: string) => {
        if (searchValue === '') {
            await axios.get(`${BaseUrl}/api/billboards`).then((res) => {
                setData(res.data)
            })
        } else {
            await axios
                .get(`${BaseUrl}/api/billboards?search=${searchValue}`)
                .then((res) => {
                    setData(res.data)
                })
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        axios.get(`${BaseUrl}/api/billboards`).then((res) => {
            setData(res.data)
        })
        controller.abort()
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex flex-row items-center mb-2">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="ios-arrow-back-outline"
                        size={30}
                        color={Colors.primaryColor}
                        style={{marginLeft: 10, marginRight: 10}}
                    ></Ionicons>
                </TouchableOpacity>
                <View
                    style={{width: windowWidth}}
                    className="flex flex-row items-center px-2 my-2 bg-gray-100 rounded-lg"
                >
                    <Ionicons style={styles.searchIcon} name="ios-search" size={20}/>
                    <DelayInput
                        placeholderTextColor="rgba(60, 60, 67, 0.6)"
                        clearButtonMode="while-editing"
                        style={styles.searchInput}
                        placeholder="Search"
                        onChangeText={(text: any) => searchData(text)}
                    />
                </View>
            </View>
            <SearchBillboardDataList data={data}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchIcon: {
        color: Colors.textColor,
    },
    searchInput: {
        flex: 1,
        fontSize: 17,
        padding: 8,
    },
})

export default SearchScreen
