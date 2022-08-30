import React from 'react'
import Contact from "../components/Home/Contact";
import {ScrollView} from "react-native";

const ContactScreen = () => {
    return (
        <ScrollView className={'bg-white'}>
            <Contact/>
        </ScrollView>
    )
}
export default ContactScreen
