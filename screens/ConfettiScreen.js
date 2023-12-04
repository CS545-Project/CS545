import React, { useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function ConfettiScreen({ navigation, route }) {

    const { quiz } = route.params;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const lottieRef = useRef();

    const playAnimation = async () => {
        lottieRef.current?.play();
        await delay(2200);
        navigation.navigate('ResultsScreen', {correctAnswersCount: 5, quiz: quiz})
    }

    useEffect(() => {
        playAnimation();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <LottieView
                    ref={lottieRef}
                    loop
                    autoPlay
                    style={styles.lottie}
                    source={require('../animations/confetti.json')}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lottie: {
        width: '100%',
        height: '100%'
    },
});