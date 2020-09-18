import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

const Details = ({ route }) => (
    <View style={styles.container}>
        <Text>Details Screen</Text>

    </View>
);

export default Details;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
