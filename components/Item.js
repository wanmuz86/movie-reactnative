import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
export default function Item({ title, year, imageurl }) {
    return (
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: imageurl,
                }}
            />
            <View >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.year}>{year}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
       
        
    },
    title: {
        fontSize: 18,
        
    },
    year: {
        fontSize: 14,
    },
    tinyLogo: {
        width: 100,
        height: 150,
    },
});