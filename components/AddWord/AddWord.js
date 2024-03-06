import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Style from './AddWord.style'
import ModalView from '../ModalView';
import { AntDesign } from "@expo/vector-icons";

const AddWord = (props) => {
    const { setModal } = props.modal;
    return (
        <View style={Style.iconContainer}>
            <View style={Style.circle}>
                <TouchableOpacity onPress={() => setModal(true)}>
                    <AntDesign name="pluscircle" size={50} color="white" />
                </TouchableOpacity>
            </View>

            <ModalView {...props} />

        </View>
    );
};

export default AddWord