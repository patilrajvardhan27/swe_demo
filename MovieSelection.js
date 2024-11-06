// MovieSelection.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Dimensions } from 'react-native';

const movies = [
    { title: "Muse", image: require('./assets/muse.jpg') },
    { title: "Titanic", image: require('./assets/titanic.jpg') },
    { title: "Avengers Endgame", image: require('./assets/avengers.jpg') },
    { title: "Batman", image: require('./assets/batman.jpg') },
    { title: "Sicario", image: require('./assets/sicario.jpg') },
    { title: "Commando", image: require('./assets/commando.jpg') },
    { title: "TENET", image: require('./assets/tenet.jpg') },
    { title: "Shadow Bone", image: require('./assets/shadowbone.jpg') },
    { title: "The Expendables 2", image: require('./assets/expendables.jpg') },
    { title: "The Joker", image: require('./assets/joker.jpg') },
    { title: "Star Wars", image: require('./assets/starwars.jpg') },
    { title: "Rambo: First Blood", image: require('./assets/rambo.jpg') },
];

const MovieSelection = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            {/* Navigation Bar */}
            <View style={styles.navbar}>
                <View style={styles.navLeft}>
                    <Text style={styles.navText}>Home</Text>
                    <Text style={styles.navText}>Country</Text>
                    <Text style={styles.navText}>Movies</Text>
                    <Text style={styles.navText}>Top IMDB</Text>
                </View>
                <View style={styles.navRight}>
                    <TextInput style={styles.searchBox} placeholder="Enter Keywords" />
                    <Button title="Login/SignUp" onPress={() => {}} color={Platform.OS === 'web' ? "#3cb371" : "#fff"} />
                </View>
            </View>

            {/* Movie Selection Section */}
            <Text style={styles.title}>Movie Selection</Text>
            <Text style={styles.subtitle}>Action</Text>
            
            {/* Movie Grid */}
            <View style={styles.movieGrid}>
                {movies.map((movie, index) => (
                    <TouchableOpacity
                        style={styles.movieItem}
                        key={index}
                        onPress={() => navigation.navigate('MovieDetail', { title: movie.title, image: movie.image })}
                    >
                        <Image source={movie.image} style={styles.movieImage} />
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default MovieSelection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#3cb371',
    },
    navLeft: {
        flexDirection: 'row',
    },
    navText: {
        color: '#fff',
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    navRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        width: 200,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 20,
    },
    movieGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    movieItem: {
        width: Dimensions.get('window').width > 600 ? 150 : 100,
        margin: 10,
        alignItems: 'center',
    },
    movieImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    movieTitle: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
    },
});
