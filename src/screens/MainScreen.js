import React from "react"
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from '../data'
import { PostsList } from "../components/PostsList"
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({navigation}) => {
    const openPost = post => {
        navigation.navigate("Post", {postId: post.id, title: post.title, booked: post.booked})
    }
    return <PostsList data={DATA} openPost={openPost}/>
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

