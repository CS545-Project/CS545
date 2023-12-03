import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function ResultsScreen({ navigation, route }) {

    const { correctAnswersCount, quiz } = route.params;

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>{correctAnswersCount}/5</Text>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('QuizScreen', { quiz: quiz })}>
                    <Text style={styles.buttonText}>Try Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('MapScreen')}>
                    <Text style={styles.buttonText}>Back To Map</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    header: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    button1: {
        marginTop: '80%',
        backgroundColor: '#9226be',
        borderRadius: 5,
        width: '70%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        marginTop: '10%',
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
});