import React from "react"
import {View, StyleSheet, FlatList} from 'react-native'

import {DATA} from '../data'
import { Post } from "../components/Post"

export const MainScreen = ({navigation}) => {

    const openPost = post => {
        navigation.navigate("Post", {postId: post.id})
    }

    return <View style={styles.wrapper}>
        <FlatList 
            data={DATA} 
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => {
                return(<Post post={item} onOpen={openPost}/>)
            }}
        />
    </View>
}

MainScreen.navigationOptions = {
    headerTitle: 'Personal Blog'
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 10
    }
})