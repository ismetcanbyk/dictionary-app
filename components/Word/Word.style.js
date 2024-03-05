import { Dimensions, StyleSheet } from "react-native";

const device = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: device.width * 1.15,
    },
    original: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'black',

    },
    translation: {
        fontSize: 32,
        color: 'grey',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});