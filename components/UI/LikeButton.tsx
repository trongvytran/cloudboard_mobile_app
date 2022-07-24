import React, { useState, useEffect } from "react";
import { Pressable, View, Text, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
const LikeButton = (data: any) => {
  const [liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const [array, setArray] = useState([]);
  const [id, setId] = useState(0);
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const navigation = useNavigation()
  function expensePressHandler() {
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

  function likepost(useremail, postid) {
    setLiked((isLiked) => !isLiked)
    array.push(useremail)
    setLikeNumber(array.length)
    axios
      .patch(`http://localhost:3000/api/billboards/${postid}`, {
        like: array
      })
  }
  function removelike(useremail, postid) {
    setLiked((isLiked) => !isLiked)
    for (var i = 0; i < array.length; i++) {
      if (array[i] === useremail) {
        array.splice(i, 1);
      }
      setLikeNumber(array.length)
      axios
        .patch(`http://localhost:3000/api/billboards/${postid}`, {
          like: array
        })
    }
  }
  if (userLoginInfo != null && array !== undefined) {

    if (liked === true) {
      return (
        <View>
          <Pressable onPress={
            () => removelike(userLoginInfo.email, id)
          }>
            <MaterialCommunityIcons
              name={"heart"}
              size={32}
              color={"red"}
            />
          </Pressable>
          <Text>{likeNumber}</Text>
        </View>
      );
    }
    return (
      <View>
        <Pressable onPress={() => likepost(userLoginInfo.email, id)}>
          <MaterialCommunityIcons
            name={"heart-outline"}
            size={32}
            color={"black"}
          />
        </Pressable>
        <Text>{likeNumber}</Text>
      </View>
    );
  }
  return (
    <View>
    <Pressable  onPress={() => Alert.alert(
                  'Login to like the billboard ?',
                  alertMessage,
                  [
                    {text: 'Cancel'},
                    {text: 'OK', onPress: () => {
                      navigation.navigate('Profile')
                    }},
                  ]
                )} >
      <MaterialCommunityIcons
        name={"heart-outline"}
        size={32}
        color={"black"}
      />
    </Pressable>
    <Text>{likeNumber}</Text>
  </View>
  )
};
export default LikeButton



function alertMessage(arg0: string, alertMessage: any, arg2: { text: string; onPress: () => void; }[]): void {
  throw new Error("Function not implemented.");
}

