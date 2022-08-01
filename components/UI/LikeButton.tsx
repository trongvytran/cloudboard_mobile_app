import React, { useState, useEffect } from "react";
import { Alert, Text, StyleSheet } from "react-native";
import { useSelector } from 'react-redux'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from "react-native-gesture-handler";

const LikeButton = (data: any) => {

  const [liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const [array, setArray] = useState([]);
  const [id, setId] = useState(0);
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const navigation = useNavigation()
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
    await axios
      .patch(`http://192.168.1.6:3000/api/billboards/${postid}`, {
        like: array
      })
  }

  const unlikePost = async (useremail, postid) => {
    setLiked((isLiked) => !isLiked)
    for (var i = 0; i < array.length; i++) {
      if (array[i] === useremail) {
        array.splice(i, 1);
      }
      setLikeNumber(array.length)
      await axios
        .patch(`http://192.168.1.6:3000/api/billboards/${postid}`, {
          like: array
        })
    }
  }
  if (userLoginInfo != null && array !== undefined) {

    if (liked === true) {
      return (
      
          <TouchableOpacity style={styles.like} onPress={
            () => unlikePost(userLoginInfo.email, id)
          }>
            <Ionicons name="heart" size={24} color="red"/>
          </TouchableOpacity>
      );
    }
    return (
        <TouchableOpacity style={styles.like} onPress={() => likePost(userLoginInfo.email, id)}>
          <Ionicons name="heart-outline" size={24} color="white"/>
        </TouchableOpacity>
        
    );
  }
  return (
    <TouchableOpacity style={styles.like} onPress={() => Alert.alert(
                  'Login to like the billboard ?',
                  alertMessage,
                  [
                    {text: 'Cancel'},
                    {text: 'OK', onPress: () => {
                      navigation.navigate('Profile')
                    }},
                  ]
                )} >
      <Ionicons name="heart-outline" size={24} color="white"/>
    </TouchableOpacity>
  )
};
export default LikeButton

const styles = StyleSheet.create({
  like: {
    backgroundColor: 'black',
    opacity: 0.6,
    padding: 10,
    borderRadius: 9999,
    marginLeft: 5,
  },
})

function alertMessage(arg0: string, alertMessage: any, arg2: { text: string; onPress: () => void; }[]): void {
  throw new Error("Function not implemented.");
}

