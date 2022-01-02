import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import Logo from "../../../assets/logo.png";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import styles from "./styles";


export default function SignIn() {

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
                        <Text style={styles.text}>Faça seu login para continuar</Text>
                    </View>

                    <Input name="mail" icon="mail" placeholder="Digite seu e-mail" />

                    <Input name="lock" icon="lock" placeholder="Digite sua senha" secureTextEntry />

                    <Button onPress={() => navigation.navigate('RoutesTabs')}>Entrar</Button>

                    <TouchableOpacity >
                        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.createAccountButton}
                        onPress={() => navigation.navigate('SignUp')}>
                        <Icon name="log-in" color={"#61BAAD"} size={20} />
                        <Text style={styles.textAccountButton}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}