import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Item from './Item'
export default function Home({navigation}) {
    const [movie, setMovie] = useState('')
    const [movies, setMovies] = useState([])

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.push('Detail',{imdbID:item.imdbID})}>
        <Item title={item.Title} year={item.Year} imageurl={item.Poster} />
        </TouchableOpacity>
    );

    const callApi = () => {
        fetch(`https://www.omdbapi.com/?s=${movie}&apikey=87d10179`)
            .then(response => response.json())
            .then(data => setMovies(data["Search"]));
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { setMovie(text) }}
                    value={movie}
                    placeholder="Enter movie to search"
                />
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', padding: 10, margin: 12 }}
                    onPress={callApi}
                >
                    <Text style={{ color: 'white' }}>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(movie) => movie.imdbID}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
