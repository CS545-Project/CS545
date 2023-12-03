import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function FactsScreen({ navigation, country, facts, quiz, toggleModal, currIndex }) {

    const takeQuiz = () => {
        toggleModal(currIndex);
        navigation.navigate('QuizScreen', { quiz: quiz })
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Facts about {country}</Text>
                <View style={styles.view}>
                    {facts.map((fact, index) => (
                        <Text key={index}>{'\u2022'} {fact}</Text>
                    ))}
                </View>
                <TouchableOpacity style={styles.button} onPress={takeQuiz}>
                    <Text style={styles.buttonText}>Begin Quiz!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '90%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 15,
    },
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#9226be',
        borderRadius: 5,
        width: '70%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    view: {
        marginTop: '5%',
        height: '70%',
        alignItems: 'flex-start',
    },
});