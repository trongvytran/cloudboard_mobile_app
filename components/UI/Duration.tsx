import React from 'react'
import { View, StyleSheet } from 'react-native'

const Duration = ({data}: any) => {
    if(data == '3 months'){
        return(<View style={styles.threemo}>3 months</View>)
    } 
    else if(data == '6 months'){
        return(<View style={styles.sixmo}>6 months</View>)
    } 
    else if(data == '12 months'){
        return(<View style={styles.twelvemo}>12 months</View>)
    }
    else if(data == '24 months'){
        return(<View style={styles.twentyfomo}>24 months</View>)
    }
    else if(data == '36 months'){
        return(<View style={styles.thirtysixmo}>36 months</View>)
    }
    console.log('No eligible duration!')
    return null
}

const styles = StyleSheet.create({
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
        backgroundColor:'#cfffd5',
        color:'green',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    twelvemo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#cfffd5',
        color:'green',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    twentyfomo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#cfffd5',
        color:'green',
        fontSize:12,
        fontFamily:'Arial'
    }, 
    thirtysixmo:{
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 4,
        marginRight:15,
        backgroundColor:'#cfffd5',
        color:'green',
        fontSize:12,
        fontFamily:'Arial'
    }
})
export default Duration