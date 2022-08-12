import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {styled} from 'nativewind'
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";
import Colors from "../../constants/color"

const BillboardInput = () => {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [startingPrice, setStartingPrice] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [borderRadius, setBorderRadius] = useState(Number)
    const StyledText = styled(Text)
    const StyledTextInput = styled(TextInput)
    const StyledTouchableOpacity = styled(TouchableOpacity)

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

    return (
        <ScrollView>
            <AnimatedLinearGradient style={{padding: 40, marginBottom: 16, borderRadius: 8}}
                                    colors={[Colors.primaryColor, "rgba(255, 138, 0, 1)"]}
                                    start={[0, 0]} end={[1, 1]}>
                <StyledText className={`text-gray-100 text-xl text-center font-bold`}>
                    Add your Billboard
                </StyledText>
                <StyledText className={`text-gray-100 text-lg text-center italic`}>
                    New Billboard, More Income!
                </StyledText>
            </AnimatedLinearGradient>
            <View>
                <View>
                    <StyledText>Title:</StyledText>
                    {/* // Billboard Name */}
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View>
                {/* // Billboard Address */}
                <View>
                    <StyledText>Address:</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View>
                {/* // Billboard Price Range (low) */}
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText>Starting Price:</StyledText>
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                        />
                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText>Highest Price:</StyledText>
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                {/* // Billboard Description */}
                <View>
                    <StyledText>Description:</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        multiline={true}
                    />
                </View>
                {/* // Billboard Rent Duration */}
                <View>
                    <StyledText>Duration:</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText>District:</StyledText>
                        {/* // Billboard's District */}
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View>
                    {/* // Billboard's City */}
                    <View className={`flex flex-1`}>
                        <StyledText>City:</StyledText>
                        <StyledTextInput
                            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                        />
                    </View>
                </View>
                {/* // Random */}
                <View>
                    <StyledText>Pending</StyledText>
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                    />
                </View>
                <StyledTouchableOpacity
                    className={`w-full rounded-md bg-red-600 py-3 px-4 mt-2`}
                >
                    <StyledText className={`text-white font-bold text-center`}>
                        SUBMIT
                    </StyledText>
                </StyledTouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default BillboardInput
