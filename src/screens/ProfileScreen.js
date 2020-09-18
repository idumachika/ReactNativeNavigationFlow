import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const ProfileScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text  >Product Info Screen</Text>

    </View>
);

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
