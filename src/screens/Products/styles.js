import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width / 2 - 30;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2ECFF",
        alignItems: "center",
        paddingHorizontal: 22
    },
    cardContainer: {
        height: 300,
        
        backgroundColor: "#FFFFFF",
        width,
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardProduct: {
        alignItems: "center",
    },
    cardImageProduct: {
        height: 150,
        width: 90,
    },
    cardTitle: {
        padding: 2,
        fontSize:12,
    },
    cardPreco:{
        fontSize: 14,
        marginTop:10,
        fontWeight:"bold",
        textAlign:"justify",
        color:"#7000C9",
    },
    cardButton:{
        alignItems:"center",
        backgroundColor:"#7000C9",
        justifyContent:"center",
        marginTop:10,
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
    cardTextButton:{
        color:"#FFFFFF",
        fontSize:12,
        paddingBottom:5
    },
    cardTextIconButton:{
        color:"#FFFFFF",
        fontSize:12,
        paddingTop: 5,
    },
})