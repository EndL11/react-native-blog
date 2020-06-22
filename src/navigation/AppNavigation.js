import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { AboutScreen } from '../screens/AboutScreen'
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
    }
}, navigationConfig)

const BookedNavigation = createStackNavigator({
    Booked: BookedScreen,
    Post:  PostScreen,
}, navigationConfig)

const AboutNavigation = createStackNavigator({
    About: AboutScreen
}, navigationConfig)

const CreateNavigation = createStackNavigator({
    Create: CreateScreen
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

const BottomNavigation = Platform.OS === 'android' 
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

const MainNavigation = createDrawerNavigator({
    PostTabs: {
        screen: BottomNavigation,
        navigationOptions: {
            drawerIcon: (<Ionicons name='ios-home' size={28} color={THEME.EDIT_COLOR}/>),
            drawerLabel: 'All posts'
        }
    },
    About: {
        screen: AboutNavigation,
        navigationOptions: {
            drawerIcon: (<Ionicons name='ios-apps' size={28} color={THEME.EDIT_COLOR}/>),
            drawerLabel: 'About app'
        }
    },
    Create: {
        screen: CreateNavigation,
        navigationOptions: {
            drawerIcon: (<Ionicons name='ios-create' size={28} color={THEME.EDIT_COLOR}/>),
            drawerLabel: 'Create new posts'
        }
    }
}, {
    contentOptions: {
        activeTintColor: THEME.EDIT_COLOR,
        labelStyle: {
            color: THEME.MAIN_COLOR,
            fontFamily: 'balsamiqSans_Bold',
            fontSize: 20,
        }
    }
})

export const AppNavigation = createAppContainer(MainNavigation)