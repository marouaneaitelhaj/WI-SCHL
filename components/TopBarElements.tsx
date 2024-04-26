import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, View, Text, Easing } from "react-native";
import { faClock, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Animated, {
  BounceInDown,
  BounceInUp,
  FadeIn,
  FadeInDown,
  FadeOutDown,
  FadeOutUp,
  FlipOutYLeft,
  SlideInUp,
  SlideOutUp,
} from "react-native-reanimated";

const data = [
  { key: "Accueil", icon: "home-circle" },
  { key: "Emploi", icon: "clock-time-eight" },
  { key: "Annonces", icon: "bullhorn" },
  { key: "Profil", icon: "account-circle" },
];

export default function TopBarElements() {
  const { open } = useSelector((state: RootState) => state.topBar);

  return (
    <Animated.View
      entering={SlideInUp}
      exiting={SlideOutUp}
      className="w-screen rounded-t-[50px] flex flex-row items-center justify-around py-7 px-5 flex-wrap max-h-screen"
    >
      {data.map((item, index) => (
        <View className="flex items-center">
          <Avatar.Icon
            className="border-2 border-[#1E9FF2]"
            style={{
              backgroundColor: "transparent",
              margin: 5,
            }}
            size={80}
            color="#1E9FF2"
            icon={item.icon}
          />
          <Text className="text-[#1E9FF2]">{item.key}</Text>
        </View>
      ))}
    </Animated.View>
  );
}
