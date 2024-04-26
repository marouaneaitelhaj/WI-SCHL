import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import { store } from "./state/store";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <TopBar />
      </View>
    </Provider>
  );
}
