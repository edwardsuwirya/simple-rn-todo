import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, Text, View} from 'react-native'

const InfiniteList = () => {
    const [data, setData] = useState([]);
    const [isRefresh, setRefresh] = useState(false);
    useEffect(() => {
        setTimeout(() => fetchMore(), 3000);
    }, []);

    const fetchMore = () => {
        // if (isRefresh){
        //     return null;
        // }
        setRefresh(true)
        setData(prevState => [
            ...prevState,
            ...Array.from({length: 20}).map((_, i) => i + prevState.length)
        ])
    }
    const todoItems = ({item}) => {
        return (
            <Text>{item}</Text>
        );
    };
    const renderFooter = () => {
        if (isRefresh) {
            return <ActivityIndicator size="large"/>;
        } else {
            return null;
        }
    };

    return (
        <View style={{marginBottom: 30}}>
            <FlatList
                onEndReached={fetchMore}
                data={data}
                renderItem={todoItems}
                refreshing={isRefresh}
                ListFooterComponent={renderFooter}
                keyExtractor={item => item}

            />
        </View>
    )
}
export default InfiniteList;
