import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

const HomeScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  console.log("this is the auth data", auth)

  if (!auth.user) {
    console.log('tag', !auth.user)
    return null;
  }

  const { user, email } = auth;
  const dispatch = useDispatch();
  const { errorMessageLogout } = auth;

  return (
    <View style={styles.container}>
      {errorMessageLogout && <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.errorMessage}>{errorMessageLogout}</Text>
      </View>}
      <View style={{ alignItems: 'center' }}>
        <Text h4 style={{ alignItems: 'center' }}>{`Welcome ${user} ${email}.`}</Text>
      </View>
      <View>
        <Button
          containerStyle={{ alignItems: 'center' }}
          loading={auth.loggingOut}
          onPress={() => dispatch(logout())}
          title="Logout" />

        <Button title="Submit" onPress={() => navigation.navigate("Details")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  errorMessage: {
    color: '#ff0000'
  }
});

export default HomeScreen;
