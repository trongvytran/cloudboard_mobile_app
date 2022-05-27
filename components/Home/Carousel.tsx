import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated} from 'react-native'
import CarouselItem from '../Home/CarouselItem'

const {width, height} = Dimensions.get('window')

let flatList: any

const infiniteScroll = (dataList: string | any[]) => {
    
    const numberOfData= dataList.length
    let scrollValue = 0, scrolled = 0
    
    setInterval(() => {
        scrolled++
        if(scrolled < numberOfData)
        scrollValue= scrollValue + width
        else {
            scrollValue =0,
            scrolled =0
        }
            
        
        flatList.scrollToOffset({animated: true, offset: scrollValue})
    }, 3000)
}
const Carousel = ({data}: any) => {
    
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const[dataList, setDataList] = useState(data)

    useEffect(() =>{
        setDataList(data)
        infiniteScroll(dataList)
    })

    if(data && data.length){
        return(
            <View>
                <FlatList data= {data} keyExtractor={(_item, index) => 'key' + index} 
                ref={flatList}
                horizontal
                pagingEnabled 
                scrollEnabled 
                snapToAlignment = 'center' 
                scrollEventThrottle={16} 
                decelerationRate = {'fast'}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {return <CarouselItem item = {item} /> }
                }

                onScroll = {Animated.event([{nativeEvent: {contentOffset: scrollX}}])} 

                />
                <View style={styles.dotView}>
                    {data.map((_: any, i: number) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'})
                            return(
                                <Animated.View
                                key = {i}
                                style = {{opacity, height:10, width, backgroundColor:'#595959', margin: 8, borderRadius: 5}}
                                />
                            )
                        })}
                </View>
            </View>
            
        )
    }
    console.log('Error Occured!')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center'
    }
})
export default Carousel

