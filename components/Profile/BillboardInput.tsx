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
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {styled} from 'nativewind'
import {LinearGradient} from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import Colors from '../../constants/color'
import axios from "axios";
import baseUrl from "../../constants/baseUrl";
import {useSelector} from "react-redux";

const BillboardInput = () => {
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
    // const [district, setDistrict] = useState('')
    // const [city, setCity] = useState('')
    const [image, setImage] = useState(null)
    const StyledText = styled(Text)
    const StyledTextInput = styled(TextInput)
    const StyledTouchableOpacity = styled(TouchableOpacity)

    // @ts-ignore
    useEffect(async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
                alert('Permission Denied!')
            }
        }
    }, [])

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
                "price": price,
                "duration": duration,
                "imageUrl": "https://dautubanthan.net/wp-content/uploads/2022/06/Demo-la%CC%80-gi%CC%80-Ti%CC%80m-hie%CC%82%CC%89u-y%CC%81-nghi%CC%83a-tha%CC%A3%CC%82t-su%CC%9B%CC%A3-cu%CC%89a-tu%CC%9B%CC%80-demo.jpg",
                "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
                "expiredAt": "2022-08-19T16:19:42.324Z",
                "user": userLoginInfo
            }
        )
    }
    return (
        <ScrollView>
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
                        <TextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                                   onChangeText={value => setLat(value)}/>

                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Longitude:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                            onChangeText={value => setLong(value)}
                        />
                    </View>
                </View>
                <View>
                    <StyledText style={styles.heading}>Title:</StyledText>
                    {/* // Billboard Name */}
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        onChangeText={value => setTitle(value)}
                    />
                </View>
                {/* // Billboard Address */}
                <View>
                    <StyledText style={styles.heading}>Address:</StyledText>
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        onChangeText={value => setAddress(value)}
                    />
                </View>
                {/* // Billboard Price Range (low) */}
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>Width (cm):</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                            onChangeText={value => setWidth(value)}

                        />
                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Height (cm):</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                            onChangeText={value => setHeight(value)}
                        />
                    </View>
                </View>

                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>Starting Price:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                            onChangeText={value => setPrice(value)}
                        />
                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Highest Price:</StyledText>
                        <TextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                {/* // Billboard Description */}
                <View>
                    <StyledText style={styles.heading}>Description:</StyledText>
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        multiline={true}
                        onChangeText={(description) => setDescription(description)}
                    />
                </View>
                {/* // Billboard Rent Duration */}
                <View>
                    <StyledText style={styles.heading}>Duration:</StyledText>
                    <TextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        onChangeText={(duration) => setDuration(duration)}
                    />
                </View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText style={styles.heading}>District:</StyledText>
                        {/* // Billboard's District */}
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View>
                    {/* // Billboard's City */}
                    <View className={`flex flex-1`}>
                        <StyledText style={styles.heading}>Ward:</StyledText>
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View>
                </View>
                {/* // Random */}
                <StyledTouchableOpacity
                    className={`w-full rounded-md bg-red-600 py-3 px-4 mt-2`}
                    onPress={() => postData()}
                >
                    <StyledText className={`text-white font-bold text-center`}>
                        SUBMIT
                    </StyledText>
                </StyledTouchableOpacity>
                <View>
                    <StyledText style={styles.heading}>City:</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View>
                <View>
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
                </View>
            </View>
        </ScrollView>
    )
}
export default BillboardInput

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
    },
})
