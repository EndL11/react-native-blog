import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const AppTitle = ({style, children}) => {
    return <View style={{...styles.wrap, style}}>
        <Text style={styles.text}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'balsamiqSans_BoldItalic',
        fontSize: 18,
        color: '#fff'
    },
    wrap:{
        borderBottomColor: '#fff',
        borderRadius: 30
    }
})