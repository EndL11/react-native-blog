import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { AppButton } from "../components/AppButton"
import { THEME } from "../theme"

export const AboutScreen = ({navigation}) => {
    return <View style={styles.center}>
        <Text style={styles.mainText}>This app made for your personal notes, posts and other things which you want to store.</Text>
        <Text style={styles.version}>Version: <Text style={styles.versionBold}>1.0.0</Text></Text>
        <AppButton 
            title="All posts" 
            style={styles.button} 
            onClick={() => navigation.navigate('Main')} 
            color={THEME.MAIN_COLOR}
        />
    </View>
}

AboutScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'About app',
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
        alignItems: 'center',
        paddingHorizontal: 40
    },
    mainText: {
        textAlign: "center",
        marginBottom: 15,
        fontFamily: 'balsamiqSans_Regular',
        fontSize: 18,
    },
    version: {
        fontFamily: 'balsamiqSans_Italic',
        fontSize: 16
    },
    versionBold: {
        fontFamily: 'balsamiqSans_Bold',
        fontWeight: "bold",
        fontSize: 18
    },
    button: {
        marginTop: 30,
        width: '45%',
        paddingVertical: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    }
})