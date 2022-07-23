import React, { useState, useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import axios from 'axios'

const LikeButton = (data: any) => {
  const [liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const [array, setArray] = useState([]);
  const [id, setId] = useState(0);
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
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
  return null
};
export default LikeButton



