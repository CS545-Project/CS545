import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function HelpScreen({toggleModal}) {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Help</Text>
                <Text style={styles.text}>{'\u2022'} Click on a Country to get started</Text>
                <Text style={styles.text}>{'\u2022'} Learn the facts and take the quiz</Text>
                <Text style={styles.text}>{'\u2022'} Master your knowledge and share with friends</Text>
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                    <Text style={styles.buttonText}>Got it!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '60%',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#9226be',
        borderRadius: 5,
        width: '70%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
});