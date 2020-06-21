import React from 'react'
import {View, StyleSheet, ImageBackground, Text} from 'react-native'

import {AppTitle} from '../components/AppTitle'

export const Post = ({post}) => {
    const createTimeText = (date) => {
        //  returning date 
        return `${new Date(date).toDateString()} ${new Date(date).getHours() < 10 
            ?   '0' + new Date(date).getHours()
            :   new Date(date).getHours()
        }:${new Date(date).getMinutes() < 10
            ?   '0' + new Date(date).getMinutes()
            :   new Date(date).getMinutes()
        }`;
    }
    return <View style={styles.post}>
        <ImageBackground style={styles.image} source={{uri: post.img}}>
            <View style={styles.textWrap}>
                <AppTitle>{createTimeText(post.date)}</AppTitle>
            </View>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    post:{
        marginBottom: 15,
        overflow: 'hidden'
    },
    image:{
        width:'100%',
        height: 200
    },
    textWrap:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    }
})