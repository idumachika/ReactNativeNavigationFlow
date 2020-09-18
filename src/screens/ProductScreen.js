import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const ProductScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Product Info Screen</Text>
        <Button title=
            'Submit' onPress={() => navigation.navigate("Details")} />

    </View>
);

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
