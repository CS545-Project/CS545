import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function QuizScreen({ navigation, route }) {

    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [buttonText, setButtonText] = useState('Next Queston');
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const { quiz } = route.params;
    const green = '#59bb44';
    const yellow = '#cbac39';
    const red = '#cf1f1b';

    const select = (option, index) => {
        const correct = quiz[quizIndex].correct_option === option;
        setSelectedOption(index);
        setIsCorrect(correct);
        if (correct) {
            setCorrectAnswersCount(correctAnswersCount + 1);
        }
    };
    const getBackgroundColor = (index) => {
        if (selectedOption === index) {
            return isCorrect ? green : (quiz[quizIndex].correct_option === quiz[quizIndex].options[index] ? green : red);
        } else if (quiz[quizIndex].correct_option === quiz[quizIndex].options[index]) {
            return selectedOption !== null ? green : yellow;
        }
        return yellow;
    };
    const nextQuestion = () => {
        if (quizIndex < 4) {
            setQuizIndex(quizIndex + 1);
            setSelectedOption(null);
            setIsCorrect(false);
            if (quizIndex == 3) {
                setButtonText('Finish Quiz')
            }
        }
        else {
            navigation.navigate('ResultsScreen', { correctAnswersCount: correctAnswersCount, quiz: quiz });
        }
    };

    useEffect(() => {
        setQuizIndex(0);
        setSelectedOption(null);
        setIsCorrect(false);
        setButtonText('Next Queston');
        setCorrectAnswersCount(0);
    },[route.params]);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Queston {quizIndex + 1}:</Text>
                <Text style={styles.question}>{quiz[quizIndex].question}</Text>
                {quiz[quizIndex].options.map((option, index) => (
                    <TouchableOpacity disabled={selectedOption !== null} key={index} style={[{ backgroundColor: getBackgroundColor(index) }, styles.option]} onPress={() => select(option, index)}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                {selectedOption != null &&
                    <TouchableOpacity style={styles.button} onPress={nextQuestion}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>}
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
    question: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    option: {
        marginTop: 20,
        width: '100%',
        height: '12%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    optionText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
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