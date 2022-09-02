import React, {useEffect, useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscription from '../components/Home/Subscription'
import axios from 'axios'
import {useSelector} from 'react-redux'
import TitleText from '../components/TitleText'
import LayoutView from '../components/Views/LayoutView'
import BaseUrl from '../constants/baseUrl'

const SubscriptionScreen = () => {
    const [data, setData] = useState([])
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)

    useEffect(() => {
        if (userLoginInfo != null) {
            axios
                .get(`${BaseUrl}/api/users/${userLoginInfo.id}`, {
                    headers: {Authorization: `Bearer ${userLoginInfo}`},
                })
                .then((res) => {
                    setData(res.data)
                    console.log(data);
                })
        }
    }, [])

    return (
        <LayoutView>
            <ContainerView>
                <TitleText>Subscriptions</TitleText>
                <Subscription data={(data as any).subscriptions}/>
            </ContainerView>
        </LayoutView>
    )
}

export default SubscriptionScreen
