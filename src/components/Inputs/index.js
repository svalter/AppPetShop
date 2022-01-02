import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function Input({ name, icon, ...rest }) {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={20} color={"#BFBFBF"} />
            <TextInput placeholderTextColor={"#BFBFBF"} {...rest} style={styles.textInput} />
        </View>
    )
}
