import * as React from 'react'
import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

import {AppDateTitle} from '../components/AppDateTitle'

export const Post = ({post, onOpen}) => {
    return <TouchableOpacity activeOpacity={0.3} onPress={() => onOpen(post)}>
        <View style={styles.post}>
            <ImageBackground style={styles.image} source={{uri: post.img}}>
                <View style={styles.textWrap}>
                    <AppDateTitle date={post.date}/>
                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    post:{
        marginBottom: 15,
        overflow: 'hidden'
    },
    image:{
        width:'100%',
        height: 250
    },
    textWrap:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    }
})