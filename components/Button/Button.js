import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Style from './Button.style'

const Button = ({ direction, onPress }) => {
    return (
        <View style={Style.container} >
            <TouchableOpacity onPress={onPress}>
                <AntDesign name={direction} style={Style.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Button