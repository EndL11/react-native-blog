import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = ({}) => {
    return <View style={styles.center}>
        <Text>CreateScreen</Text>
    </View>
}

CreateScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'Create new post',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Menu" iconName="md-menu" onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})