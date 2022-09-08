import {
    Animated,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
    Alert, VirtualizedList,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import React, {useEffect, useState} from 'react'
import {styled} from 'nativewind'
import {LinearGradient} from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import Colors from '../../constants/color'
import axios from "axios";
import baseUrl from "../../constants/baseUrl";
import {useSelector} from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";


const BillboardInput = () => {
    const [open, setOpen] = useState(false);
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState('')
    // const [startingPrice, setStartingPrice] = useState('')
    // const [highestPrice, setHighestPrice] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [input, setInput] = useState(null)
    const [district, setDistrict] = useState('')
    // const [district, setDistrict] = useState('')
    // const [city, setCity] = useState('')
    const [image, setImage] = useState(null)
    const StyledText = styled(Text)
    const StyledTextInput = styled(TextInput)
    const StyledTouchableOpacity = styled(TouchableOpacity)

    // @ts-ignore
    useEffect(async () => {
        // if (Platform.OS !== 'web') {
        //     const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        //     if (status !== 'granted') {
        //         alert('Permission Denied!')
        //     }
        // }
    }, [])

    const districtData = [
        {label: '1', value: '1'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
        {label: '7', value: '7'},
        {label: '8', value: '8'},
        {label: '1', value: '10'},
        {label: '1', value: '11'},
        {label: '12', value: '12'},
        {label: 'Tan Binh', value: 'Tan Binh'},
        {label: 'Tan Phu', value: 'Tan Phu'},
        {label: 'Binh Tan', value: 'Binh Tan'},
        {label: 'Binh Chanh', value: 'Binh Chanh'},
        {label: 'Hoc Mon', value: 'Hoc Mon'},
        {label: 'Cu Chi', value: 'Cu Chi'},
        {label: 'Can Gio', value: 'Can Gio'},
        {label: 'Phu Nhuan', value: 'Phu Nhuan'},
        {label: 'Go Vap', value: 'Go Vap'},
        {label: 'Nha Be', value: 'Nha Be'},
        {label: 'Thu Duc city', value: 'Thu Duc city'},
    ]

    const districtsData = {}

    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)

    const uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 5,
        })
        if (!result.cancelled) {
            setImage((result as any).uri)
        }
    }

    const AnimatedLinearGradient =
        Animated.createAnimatedComponent(LinearGradient)

    // const getPeriods = async () => {
    //     await axios.get(`${baseUrl}/api/billboards`).then(res => res.data.)
    // }

    const contractPeriods = [{label: '3 months', value: '3 months'}, {
        label: '6 months',
        value: '6 months'
    }, {label: '12 months', value: '12 months'}, {label: '24 months', value: '24 months'}, {
        label: '36 months',
        value: '36 months'
    }]

    const postData = async () => {
        await axios.post(`${baseUrl}/api/billboards`,
            {
                "lat": lat,
                "long": long,
                "name": title,
                "description": description,
                "height": height,
                "width": width,
                "address": address,
                "district": {id: 1},
                "ward": {id: 1},
                "city": {id: 1},
                "price": price,
                "duration": duration,
                "imageUrl": "https://dautubanthan.net/wp-content/uploads/2022/06/Demo-la%CC%80-gi%CC%80-Ti%CC%80m-hie%CC%82%CC%89u-y%CC%81-nghi%CC%83a-tha%CC%A3%CC%82t-su%CC%9B%CC%A3-cu%CC%89a-tu%CC%9B%CC%80-demo.jpg",
                "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
                "expiredAt": "2022-08-19T16:19:42.324Z",
                "user": userLoginInfo
            }
        )
        Alert.alert('Billboard Uploaded Successfully!')
    }
    return (
        <View className={'px-4'}>
            <AnimatedLinearGradient
                style={{padding: 40, marginBottom: 16, borderRadius: 8}}
                colors={[Colors.primaryColor, 'rgba(255, 138, 0, 1)']}
                start={[0, 0]}
                end={[1, 1]}
            >
                <StyledText className={`text-white text-xl text-center font-bold`}>
                    Add your Billboard
                </StyledText>
                <StyledText className={`text-white text-lg text-center italic`}>
                    New Billboard, More Income!
                </StyledText>
            </AnimatedLinearGradient>
            <View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>Latitude:</StyledText>
                        <TextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded  border`}
                                   onChangeText={value => setLat(value)}/>

                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Longitude:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                            keyboardType="numeric"
                            onChangeText={value => setLong(value)}
                        />
                    </View>
                </View>
                <View>
                    <StyledText style={styles.heading}>Title:</StyledText>
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                        onChangeText={value => setTitle(value)}
                    />
                </View>
                <View>
                    <StyledText style={styles.heading}>Address:</StyledText>
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                        onChangeText={value => setAddress(value)}
                    />
                </View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>Width (m):</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                            keyboardType="numeric"
                            onChangeText={value => setWidth(value)}

                        />
                    </View>

                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Height (m):</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                            keyboardType="numeric"
                            onChangeText={value => setHeight(value)}
                        />
                    </View>
                </View>

                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Price:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded border`}
                            keyboardType="numeric"
                            onChangeText={value => setPrice(value)}
                        />
                    </View>
                    {/* // Billboard Price Range (high) */}
                    {/* <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Highest Price:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                        />
                    </View> */}
                </View>

                <View>
                    <StyledText style={styles.heading}>Description:</StyledText>
                    <TextInput
                        className={`max-h-screen p-2.5 my-2.5 bg-white rounded border`}
                        multiline
                        onChangeText={(description) => setDescription(description)}

                    />
                </View>

                <View>
                    <StyledText style={styles.heading}>Duration:</StyledText>
                    <View className={`p-2.5 my-2.5 bg-white rounded border`}>
                        <View className={'w-full'}>
                            <RNPickerSelect
                                items={contractPeriods}
                                onValueChange={(duration) => setDuration(duration)}
                                useNativeAndroidPickerStyle={false}
                                style={{
                                    iconContainer: {
                                        display: "flex"
                                    }
                                }}
                                Icon={() => {
                                    return <Ionicons name={"chevron-down-outline"}
                                                     color={'gray'}
                                                     size={20}/>
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    {/* <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>District:</StyledText> */}
                    {/* // Billboard's District */}
                    {/* <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View> */}
                    {/* // Billboard's City */}
                    {/* <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Ward:</StyledText>
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View> */}
                    {/*<RNPickerSelect*/}
                    {/*    onValueChange={(value) => console.log(value)}*/}
                    {/*    style={{}}*/}
                    {/*    items={[*/}
                    {/*        {label: 'Football', value: 'football'},*/}
                    {/*        {label: 'Baseball', value: 'baseball'},*/}
                    {/*        {label: 'Hockey', value: 'hockey'},*/}
                    {/*    ]}>*/}
                </View>

                <TouchableOpacity
                    className={`w-full rounded-md bg-red-600 py-3.5 px-5 mt-2 mb-14`}
                    onPress={() => postData()}
                >
                    <Text className={`text-white text-lg font-bold text-center`}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
                {/* <View>
                    <StyledText style={styles.heading}>City:</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View> */}
                {/* <View>
                    <StyledText style={styles.heading}>Image</StyledText>
                    <View className={`flex flex-row justify-between`}>
                        <View className={`flex`}>
                            <StyledTouchableOpacity
                                className={'w-full rounded-md bg-slate-600 py-3 px-4 mt-2'}
                                onPress={() => uploadImage()}
                            >
                                <StyledText className={`flex text-white font-bold text-center`}>
                                    UPLOAD
                                </StyledText>
                            </StyledTouchableOpacity>
                        </View>
                        <View className={`flex w-full pl-4`}>
                            {image && (
                                <Image
                                    source={{uri: image}}
                                    style={{
                                        width: 300,
                                        borderRadius: 8,
                                        aspectRatio: 4 / 3,
                                        resizeMode: 'cover',
                                    }}
                                />
                            )}
                        </View>
                    </View>
                </View> */}
            </View>

        </View>

    )
}
export default BillboardInput

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
    },

})
