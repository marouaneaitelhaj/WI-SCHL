import React from "react";
import { View, Text, Alert } from "react-native";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { RootState, useAppDispatch } from "../../state/store";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { toggleTopBar, closeTopBar } from "../../state/TopBar/TopBarSlice";
import { logout } from "../../state/Auth/AuthSlice";
import { COLORS } from "../../static/colors";

const data = [
  { key: "pages/Accueil", text: "Accueil", icon: "home-circle" },
  { key: "pages/Emploi", text: "Emploi", icon: "clock-time-eight" },
  { key: "pages/Annonces", text: "Annonces", icon: "bullhorn" },
];

export default function TopBarElements() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  return (
    <Animated.View
      entering={SlideInUp}
      exiting={SlideOutUp}
      className="w-screen z-20 rounded-t-[50px] flex flex-row items-center justify-around py-7 px-5 flex-wrap h-screen"
    >
      {data.map((item, index) => (
        <Link href={item.key} className="flex items-center m-3" key={index}>
          <IconButton
            className={"border-2 border-[ " + COLORS.primaryColor + +"]"}
            style={{
              backgroundColor: "transparent",
              borderColor: COLORS.primaryColor,
            }}
            size={50}
            iconColor={COLORS.primaryColor}
            icon={item.icon}
            // onPress={() => {
            //   console.log(item.key);
            //   navigation.navigate(item.key as never);
            //   dispatch(toggleTopBar());
            // }}
          />
          <Text className="text-[#1E9FF2]">{item.text}</Text>
        </Link>
      ))}
      <View className="flex items-center m-3" key={"logout"}>
        <IconButton
          className={"border-2 border-[ " + COLORS.primaryColor + +"]"}
          style={{
            backgroundColor: "transparent",
            borderColor: COLORS.primaryColor,
          }}
          size={50}
          iconColor={COLORS.primaryColor}
          icon={"logout"}
          onPress={() => {
            Alert.alert(
              "Déconnexion",
              "Voulez-vous vraiment vous déconnecter?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    dispatch(logout());
                    dispatch(closeTopBar());
                  },
                },
              ]
            );
          }}
        />
        <Text className="text-[#1E9FF2]">{"Déconnexion"}</Text>
      </View>
    </Animated.View>
  );
}
