import { Text, View, Image } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";
import { Button, Icon } from "react-native-paper";
import { toggleTopBar } from "../state/TopBar/TopBarSlice";

export default function TopBar() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  return (
    <>
      <View className="py-10 bg-[#1E9FF2] w-screen rounded-bl-[50px] flex flex-row items-center justify-between px-5">
        <View className="flex flex-row items-center">
          {!open && (
            <Button onPress={() => dispatch(toggleTopBar())}>
              <Image
                className="w-12 h-12 m-2"
                source={require("../assets/menu_icon.png")}
              />
            </Button>
          )}
          {open && (
            <Image
              className="w-12 h-12 rounded-full"
              source={require("../assets/lloyd-sikeba.jpg")}
            />
          )}
          <View className="m-2">
            <Text className="text-white">Abilha Ali</Text>
            <Text className="text-white">Class vip</Text>
          </View>
        </View>
        <View className="flex flex-row items-center">
          {!open && (
            <Image
              className="w-12 h-12 rounded-full"
              source={require("../assets/lloyd-sikeba.jpg")}
            />
          )}
          {open && (
            <Button onPress={() => dispatch(toggleTopBar())}>
              <Icon source="close" color="white" size={50} />
            </Button>
          )}
        </View>
      </View>
      {open && <TopBarElements />}
    </>
  );
}
