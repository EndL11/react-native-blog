import * as Font from 'expo-font'
import { DB } from './db';

export async function bootstrap(){
    try {
        await Font.loadAsync({
            "balsamiqSans_Bold": require('../assets/fonts/BalsamiqSans-Bold.ttf'),
            "balsamiqSans_BoldItalic": require('../assets/fonts/BalsamiqSans-BoldItalic.ttf'),
            "balsamiqSans_Regular": require('../assets/fonts/BalsamiqSans-Regular.ttf'),
            "balsamiqSans_Italic": require('../assets/fonts/BalsamiqSans-Italic.ttf')
        });
        await DB.init()
    }
    catch(err){
        console.log(err)
    }
    
}