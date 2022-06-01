import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Duration = ({data}: any) => {
    const durationStyles = [styles.duration];
    if(data == '3 months'){
        durationStyles.push(styles.threemo);  
    } 
    if(data == '6 months'){
        durationStyles.push(styles.sixmo);
    } 
    if(data == '12 months'){
        durationStyles.push(styles.twelvemo);
    }
    if(data == '24 months'){
        durationStyles.push(styles.twentyfomo);
    }
    if(data == '36 months'){
        durationStyles.push(styles.thirtysixmo);
    }
    return (
        <Text style={durationStyles}>{data}</Text>
    )
}
const styles = StyleSheet.create({
    duration:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15, 
        fontSize:12,
        fontFamily:'Arial'
    },
    threemo:{
        backgroundColor:'#cfffd5',
        color:'green',
    },
    sixmo:{
        backgroundColor:'#ff9999',
        color:'red',
    }, 
    twelvemo:{
        backgroundColor:'#ffff99',
        color:'#999900',
    }, 
    twentyfomo:{
        backgroundColor:'#9999ff',
        color:'#00007f',
    }, 
    thirtysixmo:{
        backgroundColor:'#a4f1f5',
        color:'#16b0b8',
    } 
})
export default Duration