import axios from 'axios';
import { API_URL } from '../config/constants';
import { resetAuthAsyncStorage, setAuthAsyncStorage } from "./getAuthAsyncStorage";

function login(username, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/api/accounts/login/`, {
      username: username,
      password,
    }).then(async (response) => {
      console.log('this is the service response ', response)
      try {
        await setAuthAsyncStorage(response);
        resolve(response);
      } catch (e) { reject(e) }
    }).catch((err) => {
      reject(err)
    });
  });
}

async function logout(getState) {
  return new Promise((resolve, reject) => {
    const currentState = getState();
    const { token } = currentState.auth;
    axios.get(`${API_URL}/logout`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      resolve(response);
      await resetAuthAsyncStorage();
    }).catch((err) => reject(err));
  });
}

export const userService = {
  login,
  logout,
};
