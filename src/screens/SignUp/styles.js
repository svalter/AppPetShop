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
    backLoginButton:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12,
        height: 60,
    },
    textBackLoginButton:{
        textDecorationLine:"underline",
        fontSize:16,
        fontWeight:"bold",
        color:"#61BAAD",
        letterSpacing:1,
        marginLeft:10
    }
})