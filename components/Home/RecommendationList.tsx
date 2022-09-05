import React from 'react'
import {Dimensions, FlatList, View, VirtualizedList} from 'react-native'
import CardListItem from './CardListItem'

const RecommendationList = ({data}: any) => {
    const getItem = (data, index) => (data[index])
    const {width, height} = Dimensions.get('window')
    // const item_size = width * 8 / 5
    // const spacing = 20
    // const fullsize = item_size + spacing
    return (
        <View>
            <VirtualizedList
                data={data}
                decelerationRate={'fast'}
                getItemCount={(data) => data.length}
                className={'px-4'}
                getItem={getItem}
                horizontal
                // @ts-ignore
                ItemSeparatorComponent={() => <View className="mx-2.5"/>}
                keyExtractor={(item) => item.id}
                maxToRenderPerBatch={5}
                renderItem={({item}) => <CardListItem item={item}/>}
                scrollEnabled
                snapToAlignment="center"
                // snapToInterval={fullsize}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default RecommendationList
