import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import TopBar from "./components/TopBar";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./state/store";
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

  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {!token && <Login></Login>}
      {token && (
        <NavigationContainer>
          <TopBar />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Annonces" component={Annonces} />
            <Stack.Screen name="Emploi" component={Emploi} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ModifierLaMotDePass" component={ModifierLaMotDePass} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
