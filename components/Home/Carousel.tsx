import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated} from 'react-native'
import CarouselItem from '../Home/CarouselItem'

const {width, height} = Dimensions.get('window')

// const infiniteScroll = (dataList: any[]) => {
//     const numberOfData= dataList.length
//     let scrollValue = 0, scrolled = 0
    
//     setInterval(() => {
//         scrolled++
//         if(scrolled < numberOfData){
//         scrolled= scrollValue + width}
//         else {[
//             scrollValue =0,
//             scrolled =0
//         ]}

//         // this.flatList.scrollToOffset({animated: true, offset: scrollValue})

//     }, 3000)
// }
const Carousel = ({data}: any) => {
    
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const[dataList, setDataList] = useState(data)

    useEffect(() =>{
        setDataList(data)
        // infiniteScroll(dataList)
    })

    if(data && data.length){
        return(
            <View>
                <FlatList data= {data}
                // ref={(flatList) => {this.flatList = flatList}}
                keyExtractor={(item) => item.id} 
                horizontal
                pagingEnabled 
                scrollEnabled 
                snapToAlignment = 'center' 
                scrollEventThrottle={16} 
                decelerationRate = {'fast'}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item: item}) => {return <CarouselItem item = {item} />}
                }

                // onScroll = {Animated.event([{nativeEvent: {contentOffset: scrollX}}])} 

                />
                {/* <View style={styles.dotView}>
                    {data.map((_: any, i: number) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'})
                            return(
                                <Animated.View
                                key = {i}
                                style = {[styles.dot, opacity]}
                                />
                            )
                        })}
                </View> */}
            </View>
            
        )
    }
    console.log('Error Occured!')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent:'center'
    },
    dot: {
        height:10, 
        width, 
        backgroundColor:'#595959', 
        margin: 1, 
        borderRadius: 5
    }
})
export default Carousel

