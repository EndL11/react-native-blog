import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import { DATA } from "../data"


export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(post => post.id === postId)
    return <View style={styles.center}>
        <Text>{post.text}</Text>
    </View>
}

PostScreen.navigationOptions = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(post => post.id === postId)
    return {headerTitle: post.text}
}

const styles = StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})