import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'

import {Post} from './Post'

export const PostsList = ({data, openPost}) => {
    return <View style={styles.wrapper}>
        <FlatList 
            data={data} 
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => {
                return(<Post post={item} onOpen={openPost}/>)
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 10
    }
})