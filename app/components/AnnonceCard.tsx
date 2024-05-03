import { View, Text, Image } from "react-native";
import { Icon } from "react-native-paper";
import { Tannonce } from "state/types";

export default function AnnonceCard(
  props : {annonce : Tannonce}
) {
  return (
    <View className="bg-[#D4F4FF] flex space-y-4 p-3 m-3 rounded-xl w-40">
      <View className="bg-white w-[30px] rounded-md">
        <Image source={require("@assets/notice.png")} className="w-[40px] h-[40px]" />
      </View>
      <View style={{flexDirection:'row'}} className="w-full">
        <Text className="font-bold" numberOfLines={3} style={{flex: 1, flexWrap: 'wrap'}}>
          {props.annonce.annonce_title}
        </Text>
      </View>
      <Text className="font-light text-gray-400">12 Juin 2021</Text>
    </View>
  );
}
