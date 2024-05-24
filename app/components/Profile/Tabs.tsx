import { RootState } from "@state/store";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Tabs() {
  const { profileStatus } = useSelector((state: RootState) => state.profile);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row items-center border-b-[1px] w-full">
        <Text className={"py-3 px-10 " + profileStatus == '0' ? "border-b-[2px]" : "border-b-[1px]"}>
          Informations personnelles
        </Text>
        <Text className={"py-3 px-10 " + profileStatus == '1' ? "border-b-[2px]" : "border-b-[1px]"}>
          Modifier les informations personnelles
        </Text>
        <Text className={"py-3 px-10 " + profileStatus == '2' ? "border-b-[2px]" : "border-b-[1px]"}>
          Modifier le mot de passe
        </Text>
      </View>
    </ScrollView>
  );
}
