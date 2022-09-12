import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Alert, Animated, Text, TouchableOpacity, View } from 'react-native'
import { BASE_URL } from '../constants/endpoints'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/color'
import { useStripe } from '@stripe/stripe-react-native'
import moment from 'moment/moment'

const SubscriptionsScreen = () => {
  const [userSubscription, setUserSubscription] = useState(null)
  const stripe = useStripe()
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const stripeCustomerId = userLoginInfo.stripeCustomerId
  const AnimatedImageBackground =
  Animated.createAnimatedComponent(LinearGradient)

  const getUserSubscription = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/users/${userLoginInfo.id}`
    )
    return data
  }

  useEffect(() => {
    getUserSubscription().then((data) => {
      if (data.subscriptions.length > 0) {
        setUserSubscription(data.subscriptions[0])
      }
    })
  }, [])

  const subscribe = async (name: string) => {
    const periodStart = new Date()
    const periodEnd = moment(periodStart).add(1, 'month')
    try {
      await axios
        .post(`${BASE_URL}/api/subscriptions/subscribe`, {
          name: name,
          status: 'active',
          periodStart: periodStart,
          periodEnd: periodEnd,
          user: userLoginInfo,
        })
        .then((res) => {
          console.log(res)
          Alert.alert('User subscribes successfully')
          getUserSubscription()
        })
    } catch (e) {
      throw new console.error(e)
    }
  }
  {userSubscription === null ? <AnimatedImageBackground
           className={'h-screen'}
           source={require('../assets/img/cloudboard_background.png')}
           resizeMode={'cover'}
           colors={['rgba(255, 138, 0, 1)', Colors.primaryColor]}
           start={[0.4, 0.2]}
           end={[0.5, 1]}
         >
           <View className={'my-10 px-4'}>
             <View className={'py-24'}>
               <Text className={'font-bold text-white text-3xl text-center'}>
                 Let Cloudboard
               </Text>
               <Text className={'font-bold text-white text-3xl text-center'}>
                 <Text className={'italic underline'}>Scale Up</Text> Your Place!
               </Text>
             </View>
             <View>
               <TouchableOpacity
                 className={' flex flex-row bg-white rounded-lg py-6 my-3 shadow'}
                 onPress={() => subscribe('plus')}
               >
                 <View className={'flex'}>
                   <View className={'flex flex-row'}>
                     <View className={'ml-5 mr-3 my-3'}>
                       <Ionicons
                         name={'add-circle'}
                         size={32}
                         color={'orange'}
                       ></Ionicons>
                     </View>
                     <View>
                       <View className={'flex flex-row'}>
                         <Text className={'font-bold text-3xl'}>Plus</Text>
                       </View>
                       <Text className={'text-xl'}>$4.99/month</Text>
                     </View>
                   </View>
                   <View className={'ml-5 mt-2'}>
                     <View className={'mt-2'}>
                       <Text className={'italic font-semibold'}>What includes?</Text>
       
                       <View className={'flex flex-row my-1 ml-2'}>
                         <Ionicons name={'checkmark'} size={14} />
                         <Text className={'ml-1 italic'}>20 billboard posts</Text>
                       </View>
                       <View className={'flex flex-row ml-2'}>
                         <Ionicons name={'checkmark'} size={14} />
                         <Text className={'ml-1 italic'}>30-day plan</Text>
                       </View>
                     </View>
                   </View>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity
                 className={' flex flex-row bg-white rounded-lg py-6 mt-2 shadow'}
                 onPress={() => subscribe('premium')}
               >
                 <View className={'flex'}>
                   <View className={'flex flex-row'}>
                     <View className={'ml-5 mr-3 my-3'}>
                       <Ionicons name={'star'} size={32} color={'orange'}></Ionicons>
                     </View>
                     <View>
                       <Text className={'font-bold text-3xl'}>Premium</Text>
                       <Text className={'text-xl'}>$9.99/month</Text>
                     </View>
                   </View>
                   <View className={'ml-5 mt-2'}>
                     <View className={'mt-2'}>
                       <Text className={'italic font-semibold'}>What includes?</Text>
                       <View className={'flex flex-row my-1 ml-2 '}>
                         <Ionicons name={'checkmark'} size={14} />
                         <Text className={'ml-1 italic'}>40 billboard posts</Text>
                       </View>
                       <View className={'flex flex-row ml-2 italic'}>
                         <Ionicons name={'checkmark'} size={14} />
                         <Text className={'ml-1 italic'}>60-day plan</Text>
                       </View>
                     </View>
                   </View>
                 </View>
               </TouchableOpacity>
             </View>
           </View>
         </AnimatedImageBackground>
   : userSubscription.name === "plus" ? <View>Plus</View> : <View>Premium</View>}
  
}
export default SubscriptionsScreen
