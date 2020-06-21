import React from "react"
import {View, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from '../data'
import { Post } from "../components/Post"
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({navigation}) => {

    const openPost = post => {
        navigation.navigate("Post", {postId: post.id, title: post.title, booked: post.booked})
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

MainScreen.navigationOptions = ({navigation}) => {
    const createPost = () => {
        navigation.navigate('Create')
    }
    return {
        headerTitle: 'Personal Blog',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Create post" iconName="md-create" onPress={createPost}/>
            </HeaderButtons>
        ),
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Menu" iconName="md-menu" onPress={() => {}}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 10
    }
})