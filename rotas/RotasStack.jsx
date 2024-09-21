import {NavigationConteiner} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '../telas/Login'

const {Navigator, Screen} = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationConteiner>
            <Navigator>
                <Screen
                    name='login'
                    component={Login}
                />
            </Navigator>
        </NavigationConteiner>
    )
}