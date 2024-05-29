import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import { Text } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <View className="bg-[#f2f3fa] w-screen min-h-screen rounded-tr-[50px]">
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              header: () => (
                // <View className="py-5 flex justify-center items-center">
                //   <Text>Modal</Text>
                // </View>
                <></>
              ),
            }}
          />
        </Stack>
      </View>
    </View>
  );
}
