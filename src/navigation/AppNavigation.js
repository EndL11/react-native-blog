import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
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
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function PostsNavigation() {
  return (
    <Posts.Navigator>
      <Posts.Screen
        name="Main"
        component={MainScreen}
        options={{ title: "Personal Blog" }}
      />
      <Posts.Screen name="Post" component={PostScreen} />
      <Posts.Screen name="Edit" component={EditScreen} />
    </Posts.Navigator>
  );
}

function BookedNavigation() {
  return (
    <Booked.Navigator>
      <Booked.Screen name="Favorites" component={BookedScreen} />
      <Booked.Screen name="Post" component={PostScreen} />
      <Booked.Screen name="Edit" component={EditScreen} />
    </Booked.Navigator>
  );
}

function AboutNavigation(){
  return (
    <About.Navigator>
    <About.Screen name="About" component={AboutScreen} />
  </About.Navigator>
  )
}

function CreateNavigation(){
  return (
    <Create.Navigator>
    <Create.Screen name="Create" component={CreateScreen} />
  </Create.Navigator>
  )
}

function TabNavigation(){
  return(
    <Tab.Navigator>
        <Tab.Screen name="All">{() => <PostsNavigation />}</Tab.Screen>
        <Tab.Screen name="Favorites">{() => <BookedNavigation />}</Tab.Screen>
    </Tab.Navigator>
  )
}

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="All posts">
        <Drawer.Screen name="All posts" component={TabNavigation} />
        <Drawer.Screen name="About" component={AboutNavigation} />
        <Drawer.Screen name="Create" component={CreateNavigation} />
      </Drawer.Navigator>      
    </NavigationContainer>
  );
};

// const navigationConfig = {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
//     },
//     headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
//   },
// };

// const PostNavigation = createStackNavigator(
//   {
//     Main: MainScreen,
//     Post: {
//       screen: PostScreen,
//     },
//     Edit: EditScreen,
//   },
//   navigationConfig
// );

// const BookedNavigation = createStackNavigator(
//   {
//     Booked: BookedScreen,
//     Post: PostScreen,
//     Edit: EditScreen,
//   },
//   navigationConfig
// );

// const AboutNavigation = createStackNavigator(
//   {
//     About: AboutScreen,
//   },
//   navigationConfig
// );

// const CreateNavigation = createStackNavigator(
//   {
//     Create: CreateScreen,
//   },
//   navigationConfig
// );

// const bottomNavigationConfig = {
//   Post: {
//     screen: PostNavigation,
//     navigationOptions: {
//       tabBarLabel: "All",
//       tabBarIcon: (info) => (
//         <Ionicons name="ios-albums" size={25} color={info.tintColor} />
//       ),
//     },
//   },
//   Booked: {
//     screen: BookedNavigation,
//     navigationOptions: {
//       tabBarLabel: "Favorites",
//       tabBarIcon: (info) => (
//         <Ionicons name="ios-bookmark" size={25} color={info.tintColor} />
//       ),
//     },
//   },
// };

// const BottomNavigation =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(bottomNavigationConfig, {
//         activeTintColor: "#fff",
//         shifting: true,
//         barStyle: {
//           backgroundColor: THEME.MAIN_COLOR,
//         },
//       })
//     : createBottomTabNavigator(bottomNavigationConfig, {
//         tabBarOptions: {
//           activeTintColor: THEME.MAIN_COLOR,
//         },
//       });

// const MainNavigation = createDrawerNavigator(
//   {
//     PostTabs: {
//       screen: BottomNavigation,
//       navigationOptions: {
//         drawerIcon: (
//           <Ionicons name="ios-home" size={28} color={THEME.EDIT_COLOR} />
//         ),
//         drawerLabel: "All posts",
//       },
//     },
//     About: {
//       screen: AboutNavigation,
//       navigationOptions: {
//         drawerIcon: (
//           <Ionicons name="ios-apps" size={28} color={THEME.EDIT_COLOR} />
//         ),
//         drawerLabel: "About app",
//       },
//     },
//     Create: {
//       screen: CreateNavigation,
//       navigationOptions: {
//         drawerIcon: (
//           <Ionicons name="ios-create" size={28} color={THEME.EDIT_COLOR} />
//         ),
//         drawerLabel: "Create new posts",
//       },
//     },
//   },
//   {
//     contentOptions: {
//       activeTintColor: THEME.EDIT_COLOR,
//       labelStyle: {
//         color: THEME.MAIN_COLOR,
//         fontFamily: "balsamiqSans_Bold",
//         fontSize: 20,
//       },
//     },
//   }
// );

// export const AppNavigation = createAppContainer(MainNavigation);
