import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';


export default function Button({ children, ...rest }) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.title}>{children}</Text>
        </TouchableOpacity>
    )
}
