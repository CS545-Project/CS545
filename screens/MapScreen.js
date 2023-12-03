import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Modal from "react-native-modal";
import FactsScreen from "../screens/FactsScreen";

import americaFlag from '../flags/america.png';
import spainFlag from '../flags/spain.png';
import brazilFlag from '../flags/brazil.png';
import russiaFlag from '../flags/russia.png';

export default function MapScreen({ navigation }) {

    const [currIndex, setCurrIndex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = (index) => {
        setCurrIndex(index);
        setModalVisible(!isModalVisible);
    };

    const markers = [
        {
            latitude: 40,
            longitude: -100,
            flag: americaFlag,
            name: "America",
            facts: [
                'The official name of the USA is The United States of America',
                'The US is made up of 50 states and a national government in Washington, DC',
                'Washington DC is not a state',
                'The United States has no official language or religion',
                'The US is known as a “melting pot” culture',
                'The US celebrates Independence Day from the British Empire on July 4',
                'Americans use the Fahrenheit temperature system instead of Celsius',
                'Americans write the date as Month/Day/Year instead of Day/Month/Year',
                'The first humans migrated into North America at least 12,000 years ago, or even earlier',
                'The very first documented European to arrive in North America was the Spaniard Juan Ponce de León, who landed in Florida in 1513',
                'Alaska is the largest state in the US',
                'California is the US #1 dairy producer'
            ],
            quiz: [
                {
                    "question": "What is the official name of the USA?",
                    "options": [
                        "The Republic of America",
                        "The United States of America",
                        "The American Federation",
                        "The American States Union"
                    ],
                    "correct_option": "The United States of America"
                },
                {
                    "question": "How many states make up the USA?",
                    "options": [
                        "48 states",
                        "50 states",
                        "52 states",
                        "45 states"
                    ],
                    "correct_option": "50 states"
                },
                {
                    "question": "What is unique about Washington, DC in the United States?",
                    "options": [
                        "It is the largest state",
                        "It is the capital but not a state",
                        "It is the smallest state",
                        "It has no population"
                    ],
                    "correct_option": "It is the capital but not a state"
                },
                {
                    "question": "Which of the following is true about the United States?",
                    "options": [
                        "It has an official language and religion",
                        "It has no official language or religion",
                        "It only speaks English",
                        "It is a mono-cultural society"
                    ],
                    "correct_option": "It has no official language or religion"
                },
                {
                    "question": "When does the US celebrate Independence Day?",
                    "options": [
                        "July 4",
                        "August 15",
                        "December 25",
                        "January 1"
                    ],
                    "correct_option": "July 4"
                }
            ]
        },
        {
            latitude: 40.4637,
            longitude: -3.7492,
            flag: spainFlag,
            name: "Spain",
            facts: [
                'Spain is the only European country to have a physical border with an African country (Morocco)',
                'The national anthem of Spain, Marcha Real, has no official lyrics',
                'La Tomatina is a famous festival held in Spain where participants throw tomatoes at each other',
                'Spain is home to 44 UNESCO World Heritage Sites, the third-highest in the world',
                'The famous artist Pablo Picasso was born in Malaga, Spain',
                'Spain produces over half of the worlds olive oil, more than the next four largest producers combined',
                'The Madrid-Barcelona high-speed rail line is the longest in Europe',
                'Flamenco, a popular dance and music genre, originated in Spain',
                'The Sagrada Familia in Barcelona has been under construction since 1882',
                'Spain has a diverse climate, ranging from temperate in the north to desert-like in the south',
                'Spanish is the second most widely spoken language in the world',
                'Real Madrid and Barcelona are among the most successful football clubs in the world',
            ],
            quiz: [
                {
                    "question": "Which European country has a physical border with an African country?",
                    "options": [
                        "France",
                        "Italy",
                        "Spain",
                        "Portugal"
                    ],
                    "correct_option": "Spain"
                },
                {
                    "question": "What is unique about Spain's national anthem, Marcha Real?",
                    "options": [
                        "It's the oldest anthem in the world",
                        "It has no official lyrics",
                        "It's never played internationally",
                        "It changes every year"
                    ],
                    "correct_option": "It has no official lyrics"
                },
                {
                    "question": "What is La Tomatina?",
                    "options": [
                        "A tomato cooking festival",
                        "A tomato throwing festival",
                        "A film festival",
                        "A music festival"
                    ],
                    "correct_option": "A tomato throwing festival"
                },
                {
                    "question": "How many UNESCO World Heritage Sites are there in Spain?",
                    "options": [
                        "30",
                        "44",
                        "50",
                        "55"
                    ],
                    "correct_option": "44"
                },
                {
                    "question": "Which famous artist was born in Malaga, Spain?",
                    "options": [
                        "Salvador Dali",
                        "Francisco Goya",
                        "Pablo Picasso",
                        "El Greco"
                    ],
                    "correct_option": "Pablo Picasso"
                },
                {
                    "question": "What is Spain the world's largest producer of?",
                    "options": [
                        "Wine",
                        "Olive oil",
                        "Oranges",
                        "Tomatoes"
                    ],
                    "correct_option": "Olive oil"
                }
            ]
        },
        {
            latitude: -14.2350,
            longitude: -51.9253,
            flag: brazilFlag,
            name: "Brazil",
            facts: [
                'Brazil is the largest country in both South America and Latin America',
                'The Amazon River, flowing in Brazil, is by volume the worlds largest river',
                'Brazilian football is highly celebrated and the country has won the FIFA World Cup 5 times',
                'The Carnival in Rio de Janeiro is one of the most famous festivals in the world',
                'Portuguese is the official language of Brazil, making it the largest Portuguese-speaking country',
                'The Christ the Redeemer statue in Rio de Janeiro is one of the New Seven Wonders of the World',
                'Brazil is one of the world\'s leading producers of coffee',
                'The Amazon Rainforest, the largest rainforest on Earth, is mostly located in Brazil',
                'Capoeira, a martial art that combines elements of dance and music, originated in Brazil',
                'The Pantanal, the world\'s largest tropical wetland area, is located mostly within Brazil',
                'Brazil has a diverse wildlife and is home to a variety of unique species'
            ],
            quiz: [
                {
                    "question": "What is Brazil's position in terms of size in Latin America?",
                    "options": [
                        "Second largest",
                        "Largest",
                        "Third largest",
                        "Fourth largest"
                    ],
                    "correct_option": "Largest"
                },
                {
                    "question": "Which river in Brazil is the largest by volume in the world?",
                    "options": [
                        "The Amazon River",
                        "The Nile River",
                        "The Yangtze River",
                        "The Mississippi River"
                    ],
                    "correct_option": "The Amazon River"
                },
                {
                    "question": "How many times has Brazil won the FIFA World Cup?",
                    "options": [
                        "3 times",
                        "4 times",
                        "5 times",
                        "6 times"
                    ],
                    "correct_option": "5 times"
                },
                {
                    "question": "What is the official language of Brazil?",
                    "options": [
                        "Spanish",
                        "Portuguese",
                        "French",
                        "English"
                    ],
                    "correct_option": "Portuguese"
                },
                {
                    "question": "Which famous statue in Rio de Janeiro is one of the New Seven Wonders of the World?",
                    "options": [
                        "The Statue of Liberty",
                        "The Eiffel Tower",
                        "The Christ the Redeemer statue",
                        "The Colosseum"
                    ],
                    "correct_option": "The Christ the Redeemer statue"
                }
            ]
        },
        {
            latitude: 61.5240,
            longitude: 105.3188,
            flag: russiaFlag,
            name: "Russia",
            facts: [
                'Russia is the largest country in the world by land area',
                'The Trans-Siberian Railway spans almost all the way across the continent, making it the longest in the world',
                'Russia is home to Lake Baikal, the world\'s deepest and oldest freshwater lake',
                'The Russian ballet is world-renowned, with the Bolshoi Ballet and Mariinsky Ballet being among the most famous',
                'Russia has a rich history in space exploration, being the first country to launch a man into space',
                'The Hermitage Museum in St Petersburg is one of the largest and oldest museums in the world',
                'Russia spans 11 time zones, more than any other country',
                'Russian literature has been influential worldwide, with authors like Tolstoy and Dostoevsky',
                'The Russian language is the most widely spoken Slavic language',
                'Siberia makes up about 77% of Russia but is only sparsely inhabited',
                'The Moscow Kremlin is the largest active fortress in Europe',
                'Russia has a diverse climate, ranging from the arctic in Siberia to subtropical along the Black Sea coast'
            ],
            quiz: [
                {
                    "question": "What is the rank of Russia in terms of land area in the world?",
                    "options": [
                        "Largest",
                        "Second largest",
                        "Third largest",
                        "Fourth largest"
                    ],
                    "correct_option": "Largest"
                },
                {
                    "question": "What is the Trans-Siberian Railway known for?",
                    "options": [
                        "Being the most scenic railway",
                        "Being the longest railway in the world",
                        "Being the oldest railway",
                        "Having the most stations"
                    ],
                    "correct_option": "Being the longest railway in the world"
                },
                {
                    "question": "Which lake in Russia is the world's deepest and oldest freshwater lake?",
                    "options": [
                        "Lake Ladoga",
                        "Lake Onega",
                        "Lake Baikal",
                        "Caspian Sea"
                    ],
                    "correct_option": "Lake Baikal"
                },
                {
                    "question": "What is Russia known for in the field of performing arts?",
                    "options": [
                        "Opera",
                        "Symphony Orchestra",
                        "Ballet",
                        "Contemporary Dance"
                    ],
                    "correct_option": "Ballet"
                },
                {
                    "question": "What historic achievement is Russia known for in space exploration?",
                    "options": [
                        "First country to land on the moon",
                        "First country to launch a man into space",
                        "First to build a space station",
                        "First to send a woman into space"
                    ],
                    "correct_option": "First country to launch a man into space"
                }
            ]
        },
    ]

    return (
        <>
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(!isModalVisible)}
                swipeDirection="down"
                backdropOpacity={0.5}
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
            >
                <View style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        width: 40,
                        height: 5,
                        borderRadius: 2.5,
                        backgroundColor: '#ccc',
                        marginBottom: 10
                    }} />
                    <FactsScreen
                        navigation={navigation}
                        country={markers[currIndex].name}
                        facts={markers[currIndex].facts}
                        quiz={markers[currIndex].quiz}
                        toggleModal={toggleModal}
                        currIndex={currIndex}
                    />
                </View>
            </Modal>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 40.744,
                        longitude: -74.0324,
                        latitudeDelta: 150,
                        longitudeDelta: 150,
                    }}>
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker}
                        >
                            <TouchableOpacity onPress={() => toggleModal(index)}>
                                <Image style={styles.image} source={marker.flag} />
                            </TouchableOpacity>
                        </Marker>
                    ))}
                </MapView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 57,
        height: 40,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
});