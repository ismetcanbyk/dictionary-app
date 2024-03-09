import { View, Text, Modal, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './ModalView.style'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { addWord, loadInitialState } from '../Context/Slice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ModalView = (props) => {
    const { modal, setModal } = props.modal;
    const [en, setEn] = useState('');
    const [tr, setTr] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadInitialState());
    }, []);

    const handleSave = () => {
        if (en.trim() === '' || tr.trim() === '') {
            Alert.alert('Uyarı', 'Lütfen her iki dil için de bir kelime giriniz.');
            return;
        }
        const obj = {
            en,
            tr
        };
        dispatch(addWord(obj));
        setEn('');
        setTr('');
        AsyncStorage.setItem('@word', JSON.stringify(obj));
        // setModal(false)
    };


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

                <TextInput onChangeText={(e) => setEn(e)} value={en} placeholder="English" style={Style.textBox} />
                <TextInput onChangeText={(t) => setTr(t)} value={tr} placeholder="Turkish" style={Style.textBox} />

                <TouchableOpacity onPress={handleSave}
                >
                    <View style={Style.button}>
                        <AntDesign name="save" size={20} color="white" />
                        <Text style={Style.buttonText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ModalView