import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const CardStackItem = ({item}: any) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.url}} />
            <View style={styles.text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
            </View>
        </View>

)
}

export default CardStackItem

const styles = StyleSheet.create({
    card:{
        flex: 1,
        width:width - 20,
        height: height / 3,
        backgroundColor: 'white',
        marginVertical: 17,
        borderRadius: 10,
        elevation:5

    },
    text:{
        position: 'absolute',
        bottom:10,
        margin:10,
        left:5
    },
    image:{
        width: width -20,
        height: height / 3,
        borderRadius:10

    },
    title:{
        color:'white',
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5
    },
    address:{
        color:'white',
        fontSize: 12,
    },
    price:{

    },
    duration:{
        
    }

}
)