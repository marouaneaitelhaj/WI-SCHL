import { View, Text, Pressable } from "react-native";

export default function BottomSectionNotes(props: {}) {
  return (
    <View className="flex flex-row w-full  justify-center my-3 h-24  bg-[#e0e1f3] rounded-lg">
      <View className="w-1/3  flex justify-center items-center">
        <Text className=" text-center font-normal px-2 text-[#607E97]">
          Resultat avant rattrapage
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">30</Text>
      </View>
      <View className="w-1/3  flex justify-center items-center border-x-[1px] border-[#607E97]">
        <Text className=" text-center font-normal px-2 text-[#607E97]">
          Note générale
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">40</Text>
      </View>
      <View className="w-1/3  flex justify-center items-center ">
        <Text className=" text-center font-normal px-2 text-[#607E97]">
          Décision générale
        </Text>
        <Text className=" text-center font-bold text-[#607E97]">30</Text>
      </View>
    </View>
  );
}
