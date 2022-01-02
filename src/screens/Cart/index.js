import React from "react";
import { SafeAreaView, FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import Search from "../../components/Search";
import { myCart } from "../../data/cart";
import styles from "./styles";


const Card = ({ myCartItem }) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardProduct}>
                <Image source={myCartItem.image} style={styles.cardImageProduct}></Image>
            </View>
            <View>
                <Text style={styles.cardPreco}>{myCartItem.preco}</Text>
            </View>
            <View>
                <Text style={styles.cardTitle}>{myCartItem.nome}</Text>
            </View>
            <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardTextButton}>Remover do Carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}


export default function Cart() {

    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <View style={styles.cartTitleList}>
                <Text style={styles.cartTitleListText}>Itens adicionados ao carrinho</Text>
                <Icon name="shopping-cart" style={styles.cartTitleListText}/>
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 15,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={myCart }
                renderItem={({ item }) => <Card myCartItem={item}></Card>} />
        </SafeAreaView >
    )
}