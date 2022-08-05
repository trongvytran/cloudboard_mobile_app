import {View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {styled} from 'nativewind'

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

    return (
        <ScrollView>
            <View className={`border w-full rounded-lg p-10 mb-4`}>
                <StyledText className={`text-center font-bold`}>Add your Billboard</StyledText>
                <StyledText className={`text-center italic`}>New Billboard, More Income!</StyledText>
            </View>
            <View>
                <View>
                    <StyledText>Title:</StyledText>
                    {/* // Billboard Name */}
                    <StyledTextInput
                        className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                </View>
                {/* // Billboard Address */}
                <View>
                    <StyledText>Address:</StyledText>
                    <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                </View>
                {/* // Billboard Price Range (low) */}
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText>Starting Price:</StyledText>
                        <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                                         keyboardType="numeric"/>
                    </View>
                    {/* // Billboard Price Range (high) */}
                    <View className={`flex flex-1`}>
                        <StyledText>Highest Price:</StyledText>
                        <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                                         keyboardType="numeric"/>
                    </View>
                </View>
                {/* // Billboard Description */}
                <View>
                    <StyledText>Description:</StyledText>
                    <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
                                     multiline={true}/>
                </View>
                {/* // Billboard Rent Duration */}
                <View>
                    <StyledText>Duration:</StyledText>
                    <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                </View>
                <View className={`flex flex-1 flex-row justify-between items-center`}>
                    <View className={`flex flex-1 mr-2.5`}>
                        <StyledText>District:</StyledText>
                        {/* // Billboard's District */}
                        <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                    </View>
                    {/* // Billboard's City */}
                    <View className={`flex flex-1`}>
                        <StyledText>City:</StyledText>
                        <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                    </View>
                </View>
                {/* // Random */}
                <View>
                    <StyledText>Pending</StyledText>
                    <StyledTextInput className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}/>
                </View>
                <StyledTouchableOpacity className={`w-full rounded-md bg-red-600 py-3 px-4 mt-2`}>
                    <StyledText className={`text-white font-bold text-center`}>
                        SUBMIT
                    </StyledText>
                </StyledTouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default BillboardInput

const styles = StyleSheet.create({
    // input: {
    //     @apply
    //     width: '100%',
    //     height: 45,
    //     padding: 10,
    //     marginVertical: 10,
    //     backgroundColor: 'white',
    //     borderWidth:0.25,
    //     borderRadius: 1
    //   },
})
