import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./styles";


export default function Search() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonSearch}>
                <Icon name="search" style={styles.iconSearch} />
            </TouchableOpacity>
            <TextInput placeholder="pesquisar" style={styles.textInput} />
        </View>
    )
}