import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

export const AppButton = ({style, onClick, title, color}) => {
    return <View style={{...styles.button, ...style}}>
        <Button title={title} onPress={onClick} color={color}/>
    </View>
}

const styles = StyleSheet.create({
    button: {

    }
})