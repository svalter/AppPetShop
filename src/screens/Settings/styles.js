
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F2ECFF",
        paddingHorizontal: 14
    },
    cardConfig: {
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        width: "100%",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardConfigTitle: {
        fontSize: 16,
        color:"#7C888F",
        fontWeight:"bold"
    },
    cardConfigTitleIcon: {
        marginRight: 10,
        fontSize: 20,
        color: "#38BEAC",
        fontWeight:"bold"
    },
    cardOptions: {
        borderTopWidth: 1,
        borderTopColor: "#DADDE2",
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems:"center",
    },
    cardOptionsIcon: {
        marginRight: 15,
        fontSize: 14,
        color: "#7C888F"
    },
    cardOptionsTitle:{
        color:"#7C888F",
    }
})