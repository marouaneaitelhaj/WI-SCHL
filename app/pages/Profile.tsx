import { Pressable, ScrollView, View, Text } from "react-native";
import InformationspersonnelsProfile from "../components/InformationspersonnelsProfile";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import TopSectionForProfile from "../components/TopSectionForProfile";
import EditpersonnelsProfile from "../components/EditpersonnelsProfile";
import Animated, {
  Easing,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import { IconButton } from "react-native-paper";
import ModifierLaMotDePass from "./ModifierLaMotDePass";

export default function Profile() {
  const { profileStatus } = useSelector((state: RootState) => state.profile);

  return (
    <Animated.View
      entering={SlideInRight.duration(100)}
      exiting={SlideOutLeft.duration(100).easing(Easing.ease)}
    >
      <ScrollView className="my-2 h-screen">
        <TopSectionForProfile />
        {profileStatus == 0 && <InformationspersonnelsProfile />}
        {profileStatus == 1 && <EditpersonnelsProfile />}
        {profileStatus == 2 && <ModifierLaMotDePass />}
      </ScrollView>
    </Animated.View>
  );
}



export function DropDownMenu() {
  return (
    <View className="absolute w-32 bg-white rounded-md border-white border-2 z-50  h-32 -bottom-32 right-0 ">
      <View className="flex w-full items-start px-2 justify-center">
        <Pressable
          onPress={() => {
            // dispatch(logout());
            // dispatch(closeTopBar());
          }}
        >
          <Text className="text-[#5156BE]">Informations personnels</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // dispatch(logout());
            // dispatch(closeTopBar());
          }}
        >
          <Text className="text-[#5156BE]">Corriger mes informations</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // dispatch(logout());
            // dispatch(closeTopBar());
          }}
        >
          <Text className="text-[#5156BE]">Changer le mot de pass</Text>
        </Pressable>
      </View>
    </View>
  );
}