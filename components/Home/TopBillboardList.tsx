import React from 'react'
import {FlatList, View, VirtualizedList} from 'react-native'
import CardListItem from './CardListItem'

const TopBillboardList = ({data}: any) => {

    const topData = data.sort((a: any, b: any) => {
        return a.view - b.view
    })

    const getItemCount = (data) => data.length

    const getItem = (data, index) => (data[index]);

    // @ts-ignore
    return (
        <View>
            <VirtualizedList
                // data={topData}
                data={data}
                decelerationRate={'fast'}
                getItemCount={getItemCount}
                getItem={getItem}
                className={'px-4'}
                horizontal
                // @ts-ignore
                ItemSeparatorComponent={() => <View className="w-5"/>}
                keyExtractor={(item) => item.id}
                maxToRenderPerBatch={5}
                renderItem={({item}) => <CardListItem item={item}/>}
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default TopBillboardList
