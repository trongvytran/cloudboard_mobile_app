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
import React, { useEffect, useState } from 'react'
import { styled } from 'nativewind'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import Colors from '../../constants/color'

const BillboardInput = () => {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [startingPrice, setStartingPrice] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [image, setImage] = useState(null)
  const [borderRadius, setBorderRadius] = useState(Number)
  const StyledText = styled(Text)
  const StyledTextInput = styled(TextInput)
  const StyledTouchableOpacity = styled(TouchableOpacity)

  // @ts-ignore
  useEffect(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('Permission Denied!')
      }
    }
  }, [])

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

  return (
    <ScrollView>
      <AnimatedLinearGradient
        style={{ padding: 40, marginBottom: 16, borderRadius: 8 }}
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
        <View>
          <StyledText style={styles.heading}>Title:</StyledText>
          {/* // Billboard Name */}
          <StyledTextInput
            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
          />
        </View>
        {/* // Billboard Address */}
        <View>
          <StyledText style={styles.heading}>Address:</StyledText>
          <StyledTextInput
            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
          />
        </View>
        {/* // Billboard Price Range (low) */}
        <View className={`flex flex-1 flex-row justify-between items-center`}>
          <View className={`flex flex-1 mr-2.5`}>
            <StyledText style={styles.heading}>Width (cm):</StyledText>
            <StyledTextInput
              className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
              keyboardType="numeric"
            />
          </View>
          {/* // Billboard Price Range (high) */}
          <View className={`flex flex-1`}>
            <StyledText style={styles.heading}>Height (cm):</StyledText>
            <StyledTextInput
              className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View className={`flex flex-1 flex-row justify-between items-center`}>
          <View className={`flex flex-1 mr-2.5`}>
            <StyledText style={styles.heading}>Starting Price:</StyledText>
            <StyledTextInput
              className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
              keyboardType="numeric"
            />
          </View>
          {/* // Billboard Price Range (high) */}
          <View className={`flex flex-1`}>
            <StyledText style={styles.heading}>Highest Price:</StyledText>
            <StyledTextInput
              className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* // Billboard Description */}
        <View>
          <StyledText style={styles.heading}>Description:</StyledText>
          <StyledTextInput
            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
            multiline={true}
          />
        </View>
        {/* // Billboard Rent Duration */}
        <View>
          <StyledText style={styles.heading}>Duration:</StyledText>
          <StyledTextInput
            className={`max-h-11 p-2.5 my-2.5 bg-white rounded w-full border`}
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
                  source={{ uri: image }}
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

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
  },
})
