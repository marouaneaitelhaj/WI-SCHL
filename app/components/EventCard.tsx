import { View, Text } from "react-native";

export default function EventCard() {
  return (
    <View className="flex flex-row w-full p-3 space-x-3 items-center">
      <View className="h-16 w-16 flex rounded-full justify-center items-center bg-[#1E9FF2]">
        <Text className="text-white">66</Text>
      </View>
      <View className="bg-[#1E9FF2] h-16 w-4/5 rounded-md flex justify-center p-5">
        <Text className="text-white font-bold">EventCard</Text>
        <Text className="text-gray-200 text-xs">EventCard</Text>
      </View>
    </View>
  );
}
