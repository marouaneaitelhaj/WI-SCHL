import { Element } from "@state/types";
import { View, Text, Pressable } from "react-native";

export default function NotesCard(props: { element: Element }) {
  return (
    <View className="flex flex-col w-full justify-center items-center py-5 my-3 bg-[#e0e1f3]  space-x-3">
      <View className=" w-full flex border-b-[1px] py-3 border-[#13191e]  justify-center items-center bg-[#e0e1f3]">
        <Text className=" text-center font-bold text-[#13191e]">
          {props.element.libelle_fr}
        </Text>
      </View>
      <View className="flex py-3 flex-row w-full justify-around">
        <View className="w-1/3 flex justify-center items-center  bg-[#e0e1f3]">
          <Text className=" text-center font-normal text-[#13191e]">
            Coefficient
          </Text>
          <Text className=" text-center font-bold text-[#13191e]">
            {props.element.coefficient}
          </Text>
        </View>
        <View className="w-1/3 flex justify-center items-center  bg-[#e0e1f3]">
          <Text className="px-3 text-center font-normal text-[#13191e]">
            Note normal
          </Text>
          <Text className=" text-center font-bold text-[#13191e]">
            {props.element.note_n}
          </Text>
        </View>
        <View className="w-1/3 flex justify-center items-center  bg-[#e0e1f3]">
          <Text className=" text-center font-normal text-[#13191e]">
            Note rattrapage
          </Text>
          <Text className=" text-center font-bold text-[#13191e]">
            {props.element.note_r}
          </Text>
        </View>
      </View>
    </View>
  );
}
