import { StyleSheet } from "react-native";

export default StyleSheet.create({
    textBox: {
        width: 250,
        height: 50,
        margin: 5,
        backgroundColor: "#eaeaea",
        paddingLeft: 20,
        borderRadius: 25,
        fontSize: 20,
    },
    button: {
        flexDirection: "row",
        width: 250,
        height: 50,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 25,
    },
    buttonText: {
        marginLeft: 5,
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    close: {
        position: "absolute",
        top: 15,
        right: 25
    },
    cross: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 25,
    },
    modal: {
        width: "100%",
        height: 300,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});