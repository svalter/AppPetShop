import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";


export const slides = [
    {
        key: '1',
        title: 'Bem vindo ao PetShop',
        description: 'Um aplicativo totalmente voltado para as compras do seu Pet do coração!',
        image: require('../../../assets/intro-slider/people.png'),
        backgroundColor: '#7000C9',
    },
    {
        key: '2',
        title: 'Serviços e Produtos!',
        description: 'Encontre todos os serviços e produtos essenciais que você deseja dar ao seu Pet do coração!',
        image: require('../../../assets/intro-slider/products.png'),
        backgroundColor: '#FF7A48'
    },
    {
        key: '3',
        title: 'Compartilhe com Amigos!',
        description: 'Compartilhe com seus contatos este aplicativo e dê sua avaliação na PlayStore.',
        image: require('../../../assets/intro-slider/chat.png'),
        backgroundColor: '#00C5A8'
    }
]

export function renderSlider({ item }) {
    return (
        <View style={{ backgroundColor: item.backgroundColor, alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Image source={item.image} style={styles.imageLogo} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}