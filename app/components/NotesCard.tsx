import { View, Text, Pressable } from "react-native";

export default function NotesCard(props: {}) {
  return (
    <View className="flex flex-row w-full justify-center items-center my-3 h-24 space-x-3">
      <View className=" h-14 w-14 flex rounded-full justify-center items-center bg-[#e0e1f3]">
        <Text className=" text-center font-bold text-[#607E97]">JAN</Text>
      </View>
      <View className="w-20 flex justify-center items-center h-full rounded-lg bg-[#e0e1f3]">
        <Text className=" text-center font-normal text-[#607E97]">
          Coefficient
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">30</Text>
      </View>
      <View className="w-20 flex justify-center items-center h-full rounded-lg bg-[#e0e1f3]">
        <Text className="px-3 text-center font-normal text-[#607E97]">
          Note normal
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">40</Text>
      </View>
      <View className="w-20 flex justify-center items-center h-full rounded-lg bg-[#e0e1f3]">
        <Text className=" text-center font-normal text-[#607E97]">
          Note rattrapage
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">30</Text>
      </View>
    </View>
  );
}
