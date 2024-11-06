// MovieDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const MovieDetail = ({ route, navigation }) => {
    const { title, image } = route.params;

    return (
        <View style={styles.container}>
           

            <Text style={styles.pickTitle}>Your Pick</Text>
            <Image source={image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{title}</Text>
            <Text style={styles.movieDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.movieDetails}>Release Date: 03-09-2023</Text>
            <Text style={styles.movieDetails}>Language: EN</Text>

            <View style={styles.buttonsContainer}>
                <Button title="Swipe Left" color="orange" onPress={() => {}} />
                <Button title="Swipe Right" color="green" onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 20,
    },
    spacer: {
        height: 20, // Adjust the height as needed to add space above the back button
    },
    navbar: {
        marginBottom: 20,
    },
    pickTitle: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    movieImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    movieTitle: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },
    movieDescription: {
        color: '#ccc',
        textAlign: 'center',
        marginVertical: 10,
    },
    movieDetails: {
        color: '#ccc',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default MovieDetail;
