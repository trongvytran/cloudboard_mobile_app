import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
import Duration from '../UI/Duration'

const {width, height} = Dimensions.get('window')

const CardStackItem = ({item}: any) => {
    return (
        <View style={{flex:1, flexDirection: 'column'}}>
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.url}} />
        </View>
        <View style={styles.text}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flex:1, flexDirection: 'column', justifyContent:'space-between'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
        </View>
        {/* <Text style={styles.duration}>{item.duration}</Text> */}
        <View>
        <Duration data={item.duration} />
        </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        </View>
        </View>

)
}

export default CardStackItem

const styles = StyleSheet.create({
    card:{
        flex: 1,
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop:17,
        marginRight:15

    },
    text:{
        position: 'relative',
        bottom:10,
        marginTop: 15,
    },
    image:{
        width: 215,
        height: 176,
        borderRadius:10,

    },
    title:{
        color:'black',
        fontSize: 14,
        fontWeight: 'bold',
        elevation: 5,
        paddingBottom: 4
    },
    address:{
        color:'grey',
        fontSize: 12,
    },
    price:{
        color:'#F59E0B',
        marginTop:10

    }

}
)