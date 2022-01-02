import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2ECFF",
        alignItems: "center",
        paddingHorizontal: 14
    },
    welcome: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    message: {
        marginTop: 15,
        width: "100%",
        borderRadius: 5,
    },
    textMessage: {
        color: "#FFFFFF",
        padding: 10,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 25,
    },
    cardContainer: {
        width: "100%",
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    titleCard: {
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        borderBottomWidth: 0.8,
        borderBottomColor: "#DADDE2",
        color: "#3B3B3B",
    },
    imageCard: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    textCard: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    descriptionCard: {
        fontSize: 16,
        textAlign: "left",
        lineHeight: 25
    },
    precoCard: {
        marginTop: 10,
        fontSize: 20,
    },
    payCard: {
        marginTop: 10,
        marginBottom: 20,
        color: "#00C5A8",
    },
    buttonCard: {
        flexDirection: "row",
        borderTopWidth: 0.8,
        borderTopColor: "#DADDE2",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textButtonCard: {
        color: "#00C6CF",
        padding: 10,
        fontSize: 14,
        fontWeight: "bold",
    }
})