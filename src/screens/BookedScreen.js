import React from "react"
import {useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { PostsList } from "../components/PostsList"
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({navigation}) => {

    const openPost = post => {
        navigation.navigate("Post", {postId: post.id, title: post.title, booked: post.booked})
    }

    const bookedPosts = useSelector(state => state.post.bookedPosts)

    return <PostsList data={bookedPosts} openPost={openPost}/>

}

BookedScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Menu" iconName="md-menu" onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}
