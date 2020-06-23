import React, {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { PostsList } from "../components/PostsList"
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { loadPosts } from "../store/actions/post"

export const MainScreen = ({navigation}) => {
    const openPost = post => {
        navigation.navigate("Post", {postId: post.id, title: post.title, booked: post.booked})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    return <PostsList data={allPosts} openPost={openPost}/>
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
                <Item title="Menu" iconName="md-menu" onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}

