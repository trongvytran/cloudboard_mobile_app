import React from 'react'
import Contact from "../components/Home/Contact";
import {ScrollView} from "react-native";

const ContactScreen = ({route}) => {
    const item = route.params.item
    return (
        <ScrollView className={'bg-white'}>
            <Contact item={item}/>
        </ScrollView>
    )
}
export default ContactScreen
