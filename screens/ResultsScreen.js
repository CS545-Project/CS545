import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as SMS from 'expo-sms';

export default function ResultsScreen({ navigation, route }) {

    const { correctAnswersCount, quiz } = route.params;

    const sendSMS = async () => {
        await SMS.sendSMSAsync([],
            '❗Check this out❗' + '\n' + 
            "I've got a 💯 5/5 on my USA quiz"  + '\n' + 
            'and mastered 🇺🇸'
        );
    };

    return (
        <>
            {correctAnswersCount == 5 ? (
                <>
                    <View style={styles.container}>
                        <Text style={styles.header}>! Congratulations !</Text>
                        <Text style={styles.header}>You got 5/5</Text>
                        <Text style={styles.header}>You have mastered this country</Text>
                        <TouchableOpacity style={styles.button} onPress={sendSMS}>
                            <Text style={styles.buttonText}>Share With Friends </Text>
                            <Icon style={styles.icon} size={25} name='share' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MapScreen')}>
                            <Text style={styles.buttonText}>Back To Map</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.container}>
                        <Text style={styles.header}>You got {correctAnswersCount}/5</Text>
                        <Text style={styles.header}>Keep studying or retake the quiz</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizScreen', { quiz: quiz })}>
                            <Text style={styles.buttonText}>Try Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MapScreen')}>
                            <Text style={styles.buttonText}>Back To Map</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    header: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
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
    icon: {
        color: 'white',
    },
});