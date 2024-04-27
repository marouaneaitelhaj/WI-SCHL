import React, { useEffect } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, View, Text, Easing } from "react-native";
import { faClock, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Avatar, IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { RootState, useAppDispatch } from "../state/store";
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
import { toggleTopBar } from "../state/TopBar/TopBarSlice";
import { primaryColor } from "../static/colors";

const data = [
  { key: "Accueil", icon: "home-circle" },
  { key: "Emploi", icon: "clock-time-eight" },
  { key: "Annonces", icon: "bullhorn" },
  { key: "Profile", icon: "account-circle" },
];

export default function TopBarElements() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  return (
    <Animated.View
      entering={SlideInUp}
      exiting={SlideOutUp}
      className="w-screen z-10 rounded-t-[50px] flex flex-row items-center justify-around py-7 px-5 flex-wrap h-screen"
    >
      {data.map((item, index) => (
        <View className="flex items-center m-3" key={index}>
          <IconButton
            className={"border-2 border-[ " + primaryColor + +"]"}
            style={{
              backgroundColor: "transparent",
              borderColor: primaryColor,
            }}
            size={50}
            iconColor={primaryColor}
            icon={item.icon}
            onPress={() => {
              navigation.navigate(item.key as never);
              dispatch(toggleTopBar());
            }}
          />
          <Text className="text-[#C30790]">{item.key}</Text>
        </View>
      ))}
    </Animated.View>
  );
}
