import { View, Text } from 'react-native'
import React from 'react'
import Style from './Word.style'
import Button from '../Button'

const Word = ({ translation, original }) => {
    return (
        <View style={Style.container}>

            <Button direction={"left"} />

            <View style={Style.text}>
                <Text style={Style.original}>{original}</Text>
                <Text style={Style.translation}>{translation}</Text>
            </View>

            <Button direction={"right"} />


        </View>
    )
}

export default Word