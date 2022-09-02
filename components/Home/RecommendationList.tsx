import React from 'react'
import {FlatList, View, VirtualizedList} from 'react-native'
import CardListItem from './CardListItem'

const RecommendationList = ({data}: any) => {
    const getItem = (data, index) => (data[index])
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
                ItemSeparatorComponent={() => <View className="w-5"/>}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CardListItem item={item}/>}
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default RecommendationList
