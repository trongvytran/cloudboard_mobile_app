import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Alert } from 'react-native'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import baseUrl from "../../constants/baseUrl";

const LikeButton = (data: any) => {

  const [liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const [array, setArray] = useState([]);
  const [id, setId] = useState(0);
  const [view, setView] = useState(0);
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const navigation = useNavigation()
  const alertMessage = ''
  let expensePressHandler = () => {
    navigation.navigate('HomeScreen')
  }

  useEffect(() => {
    setArray(data.value.like)
    setId(data.value.id)
    setLikeNumber(array.length)
    if (userLoginInfo != null) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === userLoginInfo.email) {
          setLiked(true)
        }
      }
    }
  })
  const likePost = async (useremail, postid) => {
    setLiked((isLiked) => !isLiked)
    array.push(useremail)
    setLikeNumber(array.length)
    await axios.patch(`${baseUrl}/api/billboards/${postid}`, {
      like: array,
    })
  }

  const unlikePost = async (useremail, postid) => {
    setLiked((isLiked) => !isLiked)
    for (var i = 0; i < array.length; i++) {
      if (array[i] === useremail) {
        array.splice(i, 1)
      }
      setLikeNumber(array.length)
      await axios.patch(`${baseUrl}/api/billboards/${postid}`, {
        like: array,
      })
    }
  }
  if (userLoginInfo != null && array !== undefined) {
    if (liked === true) {
      return (
        <TouchableOpacity
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/60"
          onPress={() => unlikePost(userLoginInfo.email, id)}
        >
          <Ionicons name="heart" size={24} color="red" />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/60"
        onPress={() => likePost(userLoginInfo.email, id)}
      >
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/60"
      onPress={() =>
        Alert.alert('Login to like the billboard ?', alertMessage, [
          { text: 'Cancel' },
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ProfileScreen').
              useLayoutEffect(() => 
              {navigation.setOptions({
                headerTitle: 'dsadas',
            
              })})
            },
          },
        ])
      }
    >
      <Ionicons name="heart-outline" size={24} color="white" />
    </TouchableOpacity>
  )
}
export default LikeButton
