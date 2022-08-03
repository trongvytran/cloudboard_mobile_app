import {View, StyleSheet ,Text, TextInput, Dimensions} from 'react-native'
import React , {useState} from 'react'

const BillboardInput = () => {
    const [borderRadius, setBorderRadius] = useState(Number)
    const focus = () => {
            return styles.input.borderWidth = 0.5
        }
    
    return(
    <View>
        <View>
        <Text>Add your Billboard</Text>
        <Text>New Billboard, More Income!</Text>
        </View>
        <View>
            <View>
            <Text>Title:</Text>   
            {/* // Billboard Name */}
            <TextInput 
            className=''/>   
            </View>
            {/* // Billboard Address */}
            <View>
                <Text>Address:</Text>   
            <TextInput style={styles.input}/>
            </View>
            {/* // Billboard Price Range (low) */}
            <View>
                <Text>Starting Price:</Text>   
            <TextInput style={styles.input}/>
            </View>
            {/* // Billboard Price Range (high) */}
            <View>
                <Text>Highest Price:</Text>   
            <TextInput style={styles.input}/>
            </View>
            {/* // Billboard Description */}
            <View>
                <Text>Description:</Text>   
            <TextInput style={styles.input}/>
            </View>
            {/* // Billboard Rent Duration */}
            <View>
                <Text>Duration:</Text>   
            <TextInput style={styles.input}/>
            </View>
            <View>
                <Text>District:</Text>   
            {/* // Billboard's District */}
            <TextInput style={styles.input}/>
            </View>
            {/* // Billboard's City */}
            <View>
                <Text>City:</Text>   
            <TextInput style={styles.input}/>
            </View>
            {/* // Random */}
            <View>
                <Text>Pending</Text>   
            <TextInput style={styles.input}/>
            </View>
        </View>
    </View>
    )
}
export default BillboardInput

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth:0.25,
        borderRadius: 1
      },
})