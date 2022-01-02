import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import styles from "./styles";


export default function Settings() {

    const [showAccount, setShowAccount] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const reverseShowAccount = () => {
        setShowAccount(!showAccount);
    }

    const reverseShowHelp = () => {
        setShowHelp(!showHelp);
    }

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={reverseShowAccount} style={styles.cardConfig}>
                <Icon name="user" style={styles.cardConfigTitleIcon} />
                <Text style={styles.cardConfigTitle}>Conta</Text>
            </TouchableOpacity>
            
            {showAccount && <>
                <TouchableOpacity style={styles.cardOptions}>
                    <Icon name="lock" style={styles.cardOptionsIcon} />
                    <Text style={styles.cardOptionsTitle}>Segurança</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardOptions}>
                    <Icon name="trash" style={styles.cardOptionsIcon} />
                    <Text style={styles.cardOptionsTitle}>Apagar minha conta</Text>
                </TouchableOpacity>
            </>}

            <TouchableOpacity onPress={reverseShowHelp} style={styles.cardConfig}>
                <Icon name="help-circle" style={styles.cardConfigTitleIcon} />
                <Text style={styles.cardConfigTitle}>Central de Ajuda</Text>
            </TouchableOpacity>
            
            {showHelp &&
                <TouchableOpacity style={styles.cardOptions}>
                    <Icon name="users" style={styles.cardOptionsIcon} />
                    <Text style={styles.cardOptionsTitle}>Fale Conosco</Text>
                </TouchableOpacity>}

            <TouchableOpacity style={styles.cardConfig}>
                <Icon name="users" style={styles.cardConfigTitleIcon} />
                <Text style={styles.cardConfigTitle}>Convidar um amigo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardConfig} onPress={() => navigation.navigate('SignIn')}>
                <Icon name="log-out" style={styles.cardConfigTitleIcon} />
                <Text style={styles.cardConfigTitle}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}