import { Text, View, Image } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";
import { IconButton } from "react-native-paper";
import { toggleTopBar } from "../state/TopBar/TopBarSlice";
import { StyleSheet } from "react-native";

export default function TopBar() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  return (
    <>
      <View className="z-20 py-8 bg-[#1E9FF2] w-screen rounded-bl-[50px] flex flex-row items-center justify-between px-5">
        <View className="flex flex-row items-center">
          {open && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="close"
              iconColor="white"
              size={50}
            />
          )}
          {!open && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="dots-grid"
              iconColor="white"
              size={50}
            />
          )}
        </View>
        <View className="flex flex-row items-center justify-center">
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../assets/lloyd-sikeba.jpg")}
          />
          <View className="m-2">
            <Text className="text-white">Abilha Ali</Text>
            <Text className="text-white">Class vip</Text>
          </View>
        </View>
      </View>
      {open && <TopBarElements />}
    </>
  );
}
