import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const AppDateTitle = ({style, date}) => {
    const createTimeText = () => {
        //  returning date 
        return `${new Date(date).toDateString()} ${new Date(date).getHours() < 10 
            ?   '0' + new Date(date).getHours()
            :   new Date(date).getHours()
        }:${new Date(date).getMinutes() < 10
            ?   '0' + new Date(date).getMinutes()
            :   new Date(date).getMinutes()
        }`;
    }
    return <View style={{...styles.wrap, ...style}}>
        <Text style={styles.text}>{createTimeText()}</Text>
    </View>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'balsamiqSans_BoldItalic',
        fontSize: 18,
        color: '#fff',
    },
    wrap:{
        borderTopColor: 'rgb(131, 231, 211)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    }
})