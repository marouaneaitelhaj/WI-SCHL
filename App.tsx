import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import { store } from "./state/store";
import "react-native-gesture-handler";
import Accueil from "./pages/Accueil";
import { createStackNavigator } from "@react-navigation/stack";
import { PushNotificationIOS } from "react-native";
import Annonces from "./pages/Annonces";
import { NavigationContainer } from "@react-navigation/native";
import Emploi from "./pages/Emploi";
import Profile from "./pages/Profile";

import "react-native-gesture-handler";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TopBar />
        <Stack.Navigator screenOptions={
          {
            headerShown: false
          }
        
        }>
          <Stack.Screen name="Accueil" component={Accueil} />
          <Stack.Screen name="Annonces" component={Annonces} />
          <Stack.Screen name="Emploi" component={Emploi} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
