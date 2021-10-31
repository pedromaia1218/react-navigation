import React from "react"
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
// import Stack from "./Stack"
import BottomTab from './Tab'
// import Drawer from "./Drawer"

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                {/* <Drawer /> */}
                <BottomTab />
                {/* <Stack /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}