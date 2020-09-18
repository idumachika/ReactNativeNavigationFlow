import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const ProductScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Product Search Screen</Text>
        <Button title=
            'Submit' onPress={() => navigation.navigate("ProductInfo")} />

    </View>
);

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
