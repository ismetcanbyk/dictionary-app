import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Style from './Header.style';
import { useSelector } from 'react-redux';

const Header = () => {
    const index = useSelector((state) => state.index)
    const dictionary = useSelector((state) => state.dictionary)

    return (
        <View style={Style.container}>
            <Text style={Style.words}>
                {index + 1} <AntDesign name="smile-circle" size={40} color="black" />f
                <Text style={Style.current}> {dictionary.length}</Text>
            </Text>

        </View>
    )
}

export default Header