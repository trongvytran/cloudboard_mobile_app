import {View, VirtualizedList} from "react-native";
import React from "react";
import MyBillboardListItem from "./MyBillboardListItem";

const MyBillboardList = ({data}: any) => {
    const getItem = (data, index) => (data[index])
    return (
        <VirtualizedList
            data={data}
            decelerationRate={'fast'}
            getItemCount={(data) => data.length}
            className={'px-4'}
            getItem={getItem}
            
            // @ts-ignore
            ItemSeparatorComponent={() => <View className="mx-2.5"/>}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={5}
            renderItem={({item}) => <MyBillboardListItem item={item}/>}
            scrollEnabled
            snapToAlignment="center"
            // snapToInterval={fullsize}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default MyBillboardList
