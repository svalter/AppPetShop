import React from "react";
import { ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/Feather"
import Logo from "../../../assets/home/welcome.png"
import imgPortionDog from "../../../assets/products/animal/dog/racao.png"
import imgPortionCat from "../../../assets/products/animal/cat/racaoAtila.png"
import styles from "./styles";


export default function Home() {

    const navigation = useNavigation()

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <Image source={Logo} style={styles.logoWelcome} />
                </View>
                <LinearGradient colors={["#C406F0", "#7000C9"]} style={styles.message}>
                    <View >
                        <Text style={styles.textMessage}> Encontre todos os produtos e acessórios para seu Pet do coração !</Text>
                    </View>
                </LinearGradient>
                <View style={styles.cardContainer}>
                    <View>
                        <Text style={styles.titleCard}>Visto Recentemente</Text>
                    </View>
                    <View style={styles.imageCard}>
                        <Image source={imgPortionCat} />
                    </View>
                    <View style={styles.textCard}>
                        <Text style={styles.descriptionCard}>Ração Átila Mix Sabor Carne, Frango e Espinafre para Gatos de 10,1kg e 20kg</Text>
                        <Text style={styles.precoCard}>R$ 89,90</Text>
                        <Text > à vista</Text>
                        <Text style={styles.payCard}>2x de R$ 44,95</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Produtos')}>
                        <Text style={styles.textButtonCard}>Ver mais</Text>
                        <Icon style={styles.textButtonCard} name="chevron-right" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Text style={styles.titleCard}>Oferta do dia</Text>
                    </View>
                    <View style={styles.imageCard}>
                        <Image source={imgPortionDog} />
                    </View>
                    <View style={styles.textCard}>
                        <Text style={styles.descriptionCard}>Ração para Cachorro Pedigree Raças Pequenas 3Kg</Text>
                        <Text style={styles.precoCard}>R$ 42,90</Text>
                        <Text > à vista</Text>
                        <Text style={styles.payCard}>2x de R$ 21.45</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Produtos')}>
                        <Text style={styles.textButtonCard}>Ver todas ofertas do dia</Text>
                        <Icon style={styles.textButtonCard} name="chevron-right" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </ScrollView>
    )
}