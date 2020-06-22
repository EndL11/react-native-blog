import React from "react"
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from '../data'
import { PostsList } from "../components/PostsList"
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({navigation}) => {

    const openPost = post => {
        navigation.navigate("Post", {postId: post.id, title: post.title, booked: post.booked})
    }
    const data = DATA.filter(post => post.booked)

    return <PostsList data={data} openPost={openPost}/>

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
