import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const CardStackItem = ({item}: any) => {    
    const durationStyles = [styles.duration];
    if (item.duration==='3 months') {
        durationStyles.push(styles.threemo);
      }
    if (item.duration==='6 months') {
        durationStyles.push(styles.sixmo);
      }
    if (item.duration==='12 months') {
        durationStyles.push(styles.twelvemo);
      }
    if (item.duration==='24 months') {
        durationStyles.push(styles.twentyfomo);
      }
    if (item.duration==='36 months') {
        durationStyles.push(styles.thirtysixmo);
      }            
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
        <View >
        <Text style={durationStyles}>{item.duration}</Text>
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

    },
    duration:{
    },
    colorRed:{
        marginRight:17,
        color:'red'      
    },
    colorBlue:{
        marginRight:17,
        color:'blue'
    },
    colorGreen:{
        marginRight:17,
        color:'green'
    },
    threemo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#cfffd5',
        color:'green',
        fontSize:12,
        fontFamily:'Arial'
    },
    sixmo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#ff9999',
        color:'red',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    twelvemo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#ffff99',
        color:'#999900',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    twentyfomo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#9999ff',
        color:'#00007f',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    thirtysixmo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#a4f1f5',
        color:'#16b0b8',
        fontSize:12,
        fontFamily:'Arial'
    } 
}
)