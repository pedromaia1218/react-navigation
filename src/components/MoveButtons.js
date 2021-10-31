import React from 'react'
import {
    View,
    Button
} from 'react-native'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
            <View>
                <Button title='Next screen' onPress={() => { props.navigation.navigate(props.goTo) }} />
                {props.return
                    ? <Button title='Go back' onPress={() => { props.navigation.goBack() }} />
                    : false
                }
            </View>
        </View>
    )
}