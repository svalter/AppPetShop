import React from "react";
import { Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

import { slides, renderSlider } from "../../components/IntroSlider";
import styles from "./styles";


export default function IntroSlider() {

    const navigation = useNavigation()

    return (
        <AppIntroSlider
            renderItem={renderSlider}
            data={slides}
            activeDotStyle={{
                backgroundColor: '#FFF',
                width: 30,
            }}
            renderNextButton={() => <Text style={styles.buttonIntroSlider}>Próximo</Text>}
            renderDoneButton={() => <Text style={styles.buttonIntroSlider} >ACESSAR !</Text>}
            onDone={() => navigation.navigate('SignIn')}
        />
    )
}