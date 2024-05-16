import { TModule } from "@state/types";
import { View, Text, Pressable } from "react-native";

export default function BottomSectionNotes(props: {module : TModule}) {
  return (
    <View className="flex flex-row w-full  justify-center my-3 h-24  bg-[#e0e1f3] rounded-lg">
      <View className="w-1/3  flex justify-center items-center">
        <Text className=" text-center font-normal px-2 text-[#13191e]">
          Resultat avant rattrapage
        </Text>
        <Text className=" text-center font-bold text-[#13191e]">
          {props.module.resultat_r}
        </Text>
      </View>
      <View className="w-1/3  flex justify-center items-center border-x-[1px] border-[#13191e]">
        <Text className=" text-center font-normal px-2 text-[#13191e]">
          Note générale
        </Text>
        <Text className=" text-center font-bold text-[#13191e]">
          {props.module.resultat_n}
        </Text>
      </View>
      <View className="w-1/3  flex justify-center items-center ">
        <Text className=" text-center font-normal px-2 text-[#13191e]">
          Décision générale
        </Text>
        <Text className=" text-center font-bold text-[#13191e]">
          {props.module.decision_g}
        </Text>
      </View>
    </View>
  );
}
