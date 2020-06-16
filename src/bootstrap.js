import * as Font from 'expo-font'

export async function bootstrap(){
    await Font.loadAsync({
        "balsamiqSans_Bold": require('../assets/fonts/BalsamiqSans-Bold.ttf'),
        "balsamiqSans_BoldItalic": require('../assets/fonts/BalsamiqSans-BoldItalic.ttf'),
        "balsamiqSans_Regular": require('../assets/fonts/BalsamiqSans-Regular.ttf'),
        "balsamiqSans_RegularItalic": require('../assets/fonts/BalsamiqSans-RegularItalic.ttf'),
        "MarckScript": require('../assets/fonts/MarckScript-Regular.ttf')
    });
}