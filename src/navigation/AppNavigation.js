import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { THEME } from '../theme'

const PostNavigation = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    },
    Create: CreateScreen
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === "android" ? '#fff' : THEME.MAIN_COLOR
    }
})

const BookedNavigation = createStackNavigator({
    Booked: BookedScreen,
    Post:  PostScreen,
    Create: CreateScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === "android" ? '#fff' : THEME.MAIN_COLOR
    }
})

const MainNavigation = createBottomTabNavigator({
    Post: {
        screen: PostNavigation,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="ios-albums" size={25} color={info.tintColor}/>)
        }
    },
    Booked: {
        screen: BookedNavigation,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="ios-bookmark" size={25} color={info.tintColor}/>)
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(MainNavigation)