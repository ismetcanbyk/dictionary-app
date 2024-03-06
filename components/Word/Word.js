import { View, Text } from 'react-native'
import React from 'react'
import Style from './Word.style'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseIndex, increaseIndex } from '../Context/IndexSlice'

const Word = ({ translation, original }) => {
    const index = useSelector((state) => state.index)
    const dictionary = useSelector((state) => state.dictionary)

    const dispatch = useDispatch()

    // const index = useSelector((state) => state.index)
    const move = (direction) => {
        if (direction === "next") {
            dispatch(increaseIndex())

        }
        if (direction === "prev") {
            dispatch(decreaseIndex())

        }
    }

    return (
        <View style={Style.container}>

            <Button direction={"left"} onPress={() => {
                if (index === 0) {
                    return;
                }
                move("prev")
            }} />

            <View style={Style.text}>
                <Text style={Style.original}>{dictionary[index].en}</Text>
                <Text style={Style.translation}>{dictionary[index].tr}</Text>
            </View>

            <Button direction={"right"} onPress={() => {
                if (index === dictionary.length - 1) {
                    return;
                }
                move("next")

            }} />


        </View>
    )
}

export default Word