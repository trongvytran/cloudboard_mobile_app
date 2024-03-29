import React, { useLayoutEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    ActivityIndicator,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
import Carousel from '../components/Home/Carousel'
import SectionHeadingView from '../components/Home/SectionHeadingView'
import LogoTitle from '../components/LogoTitle'
import useBillboards from '../hooks/useBillboards'
import RecommendationList from '../components/Home/RecommendationList'
import TopBillboardList from '../components/Home/TopBillboardList'

const HomeScreen = ({ navigation }: any) => {
    const { status, data, error } = useBillboards()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props: any) => <LogoTitle {...props} />,
            headerStyle: {
                shadowColor: 'transparent',
            },

            headerTitle: '',
            headerRight: () => (
                <Ionicons
                    style={styles.icon}
                    name="ios-search-outline"
                    size={32}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            ),
        })
    }, [navigation])
    return (
        <View
            className={
                'flex flex-row justify-center h-full items-center align-middle m-auto bg-white'
            }
        >
            <View className={'w-full mx-auto'}>
                {status === 'loading' ? (
                    <View>
                        <ActivityIndicator
                            size={'large'}
                            className={`mb-2`}
                            color={Colors.primaryColor}
                        />
                    </View>
                ) : status === 'error' ? (
                    <View
                        className={`flex justify-center align-middle items-center`}
                    >
                        <Ionicons
                            name="warning-outline"
                            className={`flex justify-center items-center align-middle`}
                            size={48}
                            color={'grey'}
                        />
                        <Text className={`text-center my-2 text-gray-400`}>
                            Uh oh! Something is wrong...
                        </Text>
                        <Text className={`text-center text-gray-400`}>
                            {(error as Error).message}!
                        </Text>
                    </View>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text className="mx-4 text-2xl font-bold">
                            Find Your Billboard
                        </Text>
                        <Carousel data={data} />
                        <SectionHeadingView name="Recommendations" />
                        <RecommendationList data={data} />
                        <SectionHeadingView name="Top Billboards" />
                        <TopBillboardList data={data} />
                    </ScrollView>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        color: Colors.primaryColor,
        paddingRight: 12,
    },
})

export default HomeScreen
