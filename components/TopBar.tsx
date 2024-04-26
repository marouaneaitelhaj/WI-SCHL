import { Text, View, Image } from "react-native";
import TopBarElements from "./TopBarElements";

export default function TopBar() {
  return (
    <>
      <View className="py-10 bg-[#1E9FF2] w-screen rounded-bl-[50px] flex flex-row items-center justify-between px-5">
        <View className="flex flex-row items-center">
          <Image
            className="w-10 h-10 m-2"
            source={require("../assets/menu_icon.png")}
          />
          <View className="m-2">
            <Text className="text-white">Abilha Ali</Text>
            <Text className="text-white">Class vip</Text>
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Image
            className="w-10 h-10 rounded-full"
            source={require("../assets/lloyd-sikeba.jpg")}
          />
        </View>
      </View>
      <TopBarElements ></TopBarElements>
    </>
  );
}
