import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export default function TopSectionForProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <View className={"space-y-5 flex items-center bg-[#1E9FF2] rounded-tl-3xl"}>
      <Pressable className="absolute top-5 right-5">
        <Icon source="pencil" size={30} color="white" />
      </Pressable>
      <View className={" flex items-center py-5"}>
        <Image
          src={
            user?.img
              ? "http://ensemc.irma-prod.net/storage/" + user?.img
              : "http://ensemc.irma-prod.net/" + user?.image
          }
          className="w-24 h-24 rounded-md"
        />
      </View>
    </View>
  );
}
