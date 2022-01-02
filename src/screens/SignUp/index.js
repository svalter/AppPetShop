import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import Logo from "../../../assets/logo.png";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import styles from "./styles";


export default function SignUp() {

    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? "padding" : undefined}
            enabled>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image source={Logo} />

                    <View>
                        <Text style={styles.text}>Crie sua conta</Text>
                    </View>

                    <Input name="name" icon="user" placeholder="Digite seu nome" />

                    <Input name="mail" icon="mail" placeholder="Digite seu e-mail" />

                    <Input name="lock" icon="lock" placeholder="Digite sua senha" secureTextEntry />

                    <Button onPress={() => navigation.navigate('Home')}>Cadastrar</Button>

                    <TouchableOpacity
                        style={styles.backLoginButton}
                        onPress={() => navigation.navigate('SignIn')}>
                        <Icon name="arrow-left" color={"#61BAAD"} size={20} />
                        <Text style={styles.textBackLoginButton}>Voltar para login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}