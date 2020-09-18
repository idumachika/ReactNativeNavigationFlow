import { AsyncStorage } from 'react-native';

export async function getAuthAsyncStorage() {
  const token = await AsyncStorage.getItem('userToken');
  const user = await AsyncStorage.getItem('userData');
  const email = await AsyncStorage.getItem('userEmail')
  return {
    token,
    user: JSON.parse(user),
    email: JSON.parse(email)
  };
}

export async function setAuthAsyncStorage(response) {
  await AsyncStorage.setItem('userToken', response.data.token);
  await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
  await AsyncStorage.setItem('userEmail', JSON.stringify(response.data.email));
}

export async function resetAuthAsyncStorage() {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userEmail');

}
