import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { EditScreen } from "../screens/EditScreen";
import { THEME } from "../theme";

const Posts = createStackNavigator();
const Booked = createStackNavigator();
const About = createStackNavigator();
const Create = createStackNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const navigationConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};

function PostsNavigation() {
  return (
    <Posts.Navigator screenOptions={navigationConfig}>
      <Posts.Screen name="Main" component={MainScreen} />
      <Posts.Screen name="Post" component={PostScreen} />
      <Posts.Screen name="Edit" component={EditScreen} />
    </Posts.Navigator>
  );
}

function BookedNavigation() {
  return (
    <Booked.Navigator screenOptions={navigationConfig}>
      <Booked.Screen name="Favorites" component={BookedScreen} />
      <Booked.Screen name="Post" component={PostScreen} />
      <Booked.Screen name="Edit" component={EditScreen} />
    </Booked.Navigator>
  );
}

function AboutNavigation() {
  return (
    <About.Navigator screenOptions={navigationConfig}>
      <About.Screen name="About" component={AboutScreen} />
    </About.Navigator>
  );
}

function CreateNavigation() {
  return (
    <Create.Navigator screenOptions={navigationConfig}>
      <Create.Screen name="Create" component={CreateScreen} />
    </Create.Navigator>
  );
}

const activeTintColorTabBar = Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR;
const backgroundColorTabBar = Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff";

const allPostsBottomOptions = {
  tabBarLabel: "All",
  tabBarIcon: () => (
    <Ionicons name="ios-albums" size={25} color='#fff' />
  ),
};

const favoritePostsBottomOptions = {
  tabBarLabel: "Favorites",
  tabBarIcon: () => (
    <Ionicons name="ios-bookmark" size={25} color='#fff' />
  ),
};

function TabNavigation() {
  return (
    <Tab.Navigator shifting={true} activeColor={activeTintColorTabBar} barStyle={{backgroundColor: backgroundColorTabBar}}>
      <Tab.Screen name="All" options={allPostsBottomOptions}>
        {() => <PostsNavigation />}
      </Tab.Screen>
      <Tab.Screen name="Favorites" options={favoritePostsBottomOptions}>
        {() => <BookedNavigation />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const drawerConfig = {
  activeTintColor: THEME.EDIT_COLOR,
  inactiveTintColor: THEME.MAIN_COLOR,
  labelStyle: {
    fontFamily: "balsamiqSans_Bold",
    fontSize: 18,
  }
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="All posts"
        drawerStyle={{ backgroundColor: "#ccf" }}
        drawerContentOptions={drawerConfig}
      >
        <Drawer.Screen
          name="All posts"
          component={TabNavigation}
          options={{
            drawerIcon: () => (
              <Ionicons name="ios-home" size={28} color={THEME.EDIT_COLOR} />
            ),
            title: "All posts",
            color: THEME.MAIN_COLOR,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigation}
          options={{
            drawerIcon: () => (
              <Ionicons name="ios-apps" size={28} color={THEME.EDIT_COLOR} />
            ),
            title: "About app",
          }}
        />
        <Drawer.Screen
          name="Create"
          component={CreateNavigation}
          options={{
            drawerIcon: () => (
              <Ionicons name="ios-create" size={28} color={THEME.EDIT_COLOR} />
            ),
            title: "Create new posts",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};