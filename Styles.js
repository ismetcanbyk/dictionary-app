import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        flex: 1,
        marginTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    words: { fontSize: 60, fontWeight: "bold" },
    nav: {
        margin: 10,
        width: 200,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    word: { flexDirection: "row", width: "90%", height: 200 },
    wordSegment: { flex: 1, justifyContent: "center", alignItems: "center" },
    en: { fontWeight: "bold", fontSize: 40 },
    tr: { fontWeight: "bold", fontSize: 25, color: "gray" },
    createButton: { position: "absolute", right: 20, bottom: 20 },

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
    close: { position: "absolute", top: 15, right: 25 },
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