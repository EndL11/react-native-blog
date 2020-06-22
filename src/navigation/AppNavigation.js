import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { THEME } from '../theme'

const navigationConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === "android" ? '#fff' : THEME.MAIN_COLOR
    }
}

const PostNavigation = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    },
    Create: CreateScreen
}, navigationConfig)

const BookedNavigation = createStackNavigator({
    Booked: BookedScreen,
    Post:  PostScreen,
}, navigationConfig)

const bottomNavigationConfig = {
    Post: {
        screen: PostNavigation,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: info => (<Ionicons name="ios-albums" size={25} color={info.tintColor}/>)
        }
    },
    Booked: {
        screen: BookedNavigation,        
        navigationOptions: {    
            tabBarLabel: 'Favorites',        
            tabBarIcon: info => (<Ionicons name="ios-bookmark" size={25} color={info.tintColor}/>)
        }
    },
}

const MainNavigation = Platform.OS === 'android' 
    ?   createMaterialBottomTabNavigator(bottomNavigationConfig, {
            activeTintColor: '#fff',
            shifting: true,            
            barStyle: {
                backgroundColor: THEME.MAIN_COLOR
            }
        })
    :   createBottomTabNavigator(bottomNavigationConfig,{
        tabBarOptions: {
            activeTintColor: THEME.MAIN_COLOR
        }
})

export const AppNavigation = createAppContainer(MainNavigation)