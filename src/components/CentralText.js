import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default props => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: props.bgColor }}>
            <Text style={{ fontSize: 50, color: props.txtColor }}>{props.children}</Text>
        </View>
    )
}