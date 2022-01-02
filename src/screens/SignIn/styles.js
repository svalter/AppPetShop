import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 20,
    },
    text:{
        fontSize:14,
        fontWeight:"bold",
        color: "#38BEAC",
        marginBottom:15,
    },
    forgotPassword:{
        marginTop: 25,
        textDecorationLine:"underline",
        fontSize:16,
        color:"#625E65",
        letterSpacing:1,
    },
    createAccountButton:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12,
        height: 50,
    },
    textAccountButton:{
        textDecorationLine:"underline",
        fontSize:16,
        fontWeight:"bold",
        color:"#61BAAD",
        letterSpacing:1,
        marginLeft:10,
    }
})