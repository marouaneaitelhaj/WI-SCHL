import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import TopBar from "./components/TopBar";
import { Provider, useSelector } from "react-redux";
import { RootState, store, useAppDispatch } from "./state/store";
import "react-native-gesture-handler";
import Accueil from "./pages/Accueil";
import { createStackNavigator } from "@react-navigation/stack";
import { PushNotificationIOS } from "react-native";
import Annonces from "./pages/Annonces";
import { NavigationContainer } from "@react-navigation/native";
import Emploi from "./pages/Emploi";
import Profile from "./pages/Profile";

import "react-native-gesture-handler";
import Login from "./pages/Login";
import ModifierLaMotDePass from "./pages/ModifierLaMotDePass";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "./state/Auth/AuthSlice";
import { getProfileAction } from "./state/Auth/AuthActions";
import { ActivityIndicator } from "react-native-paper";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export function Main() {
  const Stack = createStackNavigator();

  const dispatch = useAppDispatch();

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      console.log(token);

      dispatch(setToken(token));
      dispatch(getProfileAction())
        .unwrap()
        .then(() => {})
        .catch(() => {});
    });
  }, []);

  const { token, loading } = useSelector((state: RootState) => state.auth);
  const { showProfile } = useSelector((state: RootState) => state.profile);
  useEffect(() => {
    if (token === null) {
      AsyncStorage.removeItem("token");
    }
  }, [token]);
  return (
    <>
      {loading && <Loading></Loading>}
      {!token && <Login></Login>}
      {token && (
        <NavigationContainer>
          {!showProfile && <TopBar />}
          {showProfile && <Profile />}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Annonces" component={Annonces} />
            <Stack.Screen name="Emploi" component={Emploi} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
            <Stack.Screen
              name="ModifierLaMotDePass"
              component={ModifierLaMotDePass}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export function Loading() {
  return (
    <View className="w-screen h-screen flex justify-center items-center bg-transparent opacity-70">
      <ActivityIndicator size="large" color="#1E9FF2" />
    </View>
  );
}
