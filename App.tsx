import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import TopBar from './components/TopBar';


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View>
      <TopBar />
    </View>
  );
}
