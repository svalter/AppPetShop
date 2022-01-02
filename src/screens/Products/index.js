import React from "react";
import { SafeAreaView, FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import Search from "../../components/Search";
import { products } from "../../data/products";
import styles from "./styles";


const Card = ({ product }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardProduct}>
                <Image source={product.image} style={styles.cardImageProduct}></Image>
            </View>
            <View>
                <Text style={styles.cardPreco}>{product.preco}</Text>
            </View>
            <View>
                <Text style={styles.cardTitle}>{product.nome}</Text>
            </View>
            <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Carrinho')}>
                <Icon name="shopping-cart" style={styles.cardTextIconButton} />
                <Text style={styles.cardTextButton}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}


export default function Products() {
    
    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 15,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={products}
                renderItem={({ item }) => <Card product={item}></Card>} />
        </SafeAreaView >
    )
}