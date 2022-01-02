import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        width: "100%",
        height: 35,
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        borderRadius: 5,
        paddingHorizontal: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    textInput: {
        width: "92%",
        padding: 1,
        color: "#625E65",
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: "#FFFFFF"
    },
    buttonSearch: {
        backgroundColor: "#FFFFFF",
        height: "100%",
        justifyContent: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    iconSearch: {
        color: "#38BEAC",
        fontSize: 16,
    }
})