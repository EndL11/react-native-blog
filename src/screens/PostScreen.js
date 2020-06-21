import React from "react"
import {View, Text, StyleSheet, ScrollView, Image, Button, Alert} from 'react-native'

import { DATA } from "../data"
import {THEME} from '../theme'
import { AppDateTitle } from "../components/AppDateTitle"
import { AppButton } from "../components/AppButton"

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(post => post.id === postId)
    const deletePost = () => {
        Alert.alert(
            "Delete post",
            "Are you sure want to delete this post?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", style: 'destructive', onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      
    }

    return <ScrollView>
        <AppDateTitle style={styles.date} date={post.date}/>
        <Image source={{uri: post?.img}} style={styles.image} />
        <View style={styles.textWrap}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.text}>{post.text.repeat(20)}</Text>
        </View>
        <View style={styles.buttons}>
            <AppButton style={styles.button} title="Delete" color={THEME.DANGER_COLOR} onClick={deletePost}/>
            <AppButton style={styles.button} title="Edit" color={THEME.EDIT_COLOR} onClick={deletePost}/>
        </View>
    </ScrollView>
}

PostScreen.navigationOptions = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(post => post.id === postId)
    return {headerTitle: post.title}
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    date: {
        alignItems: "center",
        backgroundColor: 'rgba(11, 51, 205, 0.7)',
        paddingVertical: 10,
    },
    textWrap: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center"
    }, 
    text: {
        fontSize: 20,
        fontFamily: 'MarckScript',
        textAlign: 'justify',
    },
    title: {
        fontSize: 18,
        fontFamily: 'balsamiqSans_Bold',
        marginBottom: 15
    },
    buttons: {
        flexDirection: "row",
        width: '100%',
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "space-around"
    },
    button: {
        width: '45%',
        paddingVertical: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    }
})