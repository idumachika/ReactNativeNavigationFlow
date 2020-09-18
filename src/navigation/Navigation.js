import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/Details';
import ProductSearch from '../screens/ProductSearch'

import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ title: "Sign In" }}
    />
    {/* <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    /> */}
  </AuthStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home" component={HomeScreen} />
    <HomeStack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const ProductStackScreen = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen name="ProductSearch" component={ProductSearch} />
    <ProductStack.Screen name="ProductInfo" component={ProductScreen} />
    <ProductStack.Screen name="Details" component={DetailsScreen} />

  </ProductStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Product" component={ProductStackScreen} />
  </Tabs.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);


export default function Navigation(props) {
  const auth = useSelector((state) => state.auth);
  const userToken = auth.user ? auth.user.token : null;
  return <Stack.Navigator>
    {userToken === null ? (
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignIn"
        component={AuthStackScreen}
      />
    ) : (
        <Stack.Screen
          name="Home"
          component={DrawerScreen}
        />
      )}
  </Stack.Navigator>;
}
