import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ScreenA from "../views/ScreenA"
import ScreenB from "../views/ScreenB"
import ScreenC from "../views/ScreenC"
import MoveButtons from "../components/MoveButtons"

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='ScreenA'>
            <Stack.Screen name='ScreenA'>
                {props => <MoveButtons goTo='ScreenB' {...props} ><ScreenA/></MoveButtons>}
            </Stack.Screen>
            <Stack.Screen name='ScreenB'>
                {props => <MoveButtons goTo='ScreenC' {...props} return><ScreenB/></MoveButtons>}
            </Stack.Screen>
            <Stack.Screen name='ScreenC'>
                {props => <MoveButtons goTo='ScreenC' {...props} return><ScreenC/></MoveButtons>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}