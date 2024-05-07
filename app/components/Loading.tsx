import { ActivityIndicator, View } from "react-native";

export default function Loading() {
    return (
      <View className="w-screen h-screen flex justify-center items-center bg-transparent opacity-70">
        <ActivityIndicator size="large" color="#5156BE" />
      </View>
    );
  }
  