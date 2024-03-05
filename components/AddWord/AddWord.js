import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import style from './AddWord.style'

const AddWord = () => {
    return (
        <View style={style.iconContainer}>
            <TouchableOpacity>
                <AntDesign name="pluscircle" style={style.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default AddWord