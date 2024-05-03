import React from "react";
import { View, Text, Alert } from "react-native";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from 'expo-router';
import { RootState, useAppDispatch } from "../../state/store";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { toggleTopBar, closeTopBar } from "../../state/TopBar/TopBarSlice";
import { logout } from "../../state/Auth/AuthSlice";
import { router } from 'expo-router';
import { COLORS } from "../../static/colors";

const data = [
  { key: "/pages/Accueil", text: "Accueil", icon: "home-circle" },
  { key: "/pages/Emploi", text: "Emploi", icon: "clock-time-eight" },
  { key: "/pages/annonces", text: "Annonces", icon: "bullhorn" },
];

export default function TopBarElements() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  return (
    <Animated.View
      entering={SlideInUp}
      exiting={SlideOutUp}
      className="w-screen z-20 space-y-5 rounded-t-[50px] flex flex-row items-center justify-start py-7 px-5 flex-wrap h-screen"
    >
      {data.map((item, index) => (
        <View  className="flex w-1/3 items-center " key={index}>
          <IconButton
            className={"border-2 border-[ " + COLORS.primaryColor + +"]"}
            style={{
              backgroundColor: "transparent",
              borderColor: COLORS.primaryColor,
            }}
            size={60}
            iconColor={COLORS.primaryColor}
            icon={item.icon}
            onPress={() => {
              router.replace(item.key as never);
              dispatch(toggleTopBar());
            }}
          />
          <Text className="text-[#1E9FF2]">{item.text}</Text>
        </View>
      ))}
      <View className="flex  w-1/3 items-center" key={"logout"}>
        <IconButton
          className={"border-2 border-[ " + COLORS.primaryColor + +"]"}
          style={{
            backgroundColor: "transparent",
            borderColor: COLORS.primaryColor,
          }}
          size={60}
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
