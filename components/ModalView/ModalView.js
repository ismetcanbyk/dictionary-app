import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Style from './ModalView.style'
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ModalView = (props) => {
    const { modal, setModal } = props.modal;
    return (
        <Modal
            transparent
            animationType="slide"
            visible={modal}
            onRequestClose={() => setModal(false)}
        >
            <View style={Style.modal}>
                <TouchableOpacity style={Style.close} onPress={() => setModal(false)}>
                    <Text style={Style.cross}>x</Text>
                </TouchableOpacity>

                <TextInput placeholder="English" style={Style.textBox} />
                <TextInput placeholder="Turkish" style={Style.textBox} />

                <TouchableOpacity>
                    <View style={Style.button}>
                        <AntDesign name="heart" size={20} color="red" />
                        <Text style={Style.buttonText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ModalView