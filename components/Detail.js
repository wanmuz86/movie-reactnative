import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Detail({ navigation }) {

  const [imdbId, setImdbId] = useState('')
  const [movie, setMovie] = useState(null)
  // When / after the page is loaded ... run something
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${navigation.getParam('imdbID')}&apikey=87d10179`)
      .then(response => response.json())
      .then(data => setMovie(data));
  })

  return (
    <View style={styles.container}>
      {
        movie ?
          <View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: movie.Poster,
                }}
            />
            <Text>{movie.Title}</Text>
            <Text>{movie.Year}</Text>
            <Text>{movie.Released}</Text>
            <Text>{movie.Director}</Text>
            <Text>{movie.Actors}</Text>
            <Text>{movie.Plot}</Text>
            <StatusBar style="auto" />
          </View>
          :
          <View></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 150,
},
});
