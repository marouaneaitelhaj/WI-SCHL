import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from "react-native";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";
import { RootState, useAppDispatch } from "../../../state/store";
import Animated, {
  Easing,
  SlideInUp,
  SlideInDown,
  SlideOutUp,
  SlideOutDown,
} from "react-native-reanimated";
import { toggleTopBar, closeTopBar } from "../../../state/TopBar/TopBarSlice";
import { logout } from "../../../state/Auth/AuthSlice";
import { router } from "expo-router";
import { COLORS } from "../../../static/colors";

const data = [
  { key: "/student/Accueil", text: "Accueil", icon: "home-circle" },
  { key: "/student/Demandes", text: "Demandes", icon: "inbox" },
  { key: "/student/Notes", text: "Notes", icon: "numeric" },
  { key: "/student/Absences", text: "Absences", icon: "table-account" },
  { key: "/student/Emploi", text: "Emploi", icon: "clock-time-eight" },
  { key: "/student/annonces", text: "Annonces", icon: "bullhorn" },
  { key: "/prof/Disponibilite", text: "Disponibilite", icon: "calendar-blank-multiple" },
  { key: "/student/Absences", text: "Absences", icon: "table-account" },
  { key: "/prof/Notes", text: "Notes", icon: "numeric" },
];

export default function TopBarElements() {
  const statusBarHeight = StatusBar.currentHeight || 0;
  // const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  useEffect(() => {
  }, [router]);

  const navigation = useNavigation();

  return (
    <Animated.View
      entering={SlideInDown.duration(200)}
      exiting={SlideOutDown.duration(100).easing(Easing.ease)}
      className="w-screen z-20 space-y-5 rounded-t-[50px] flex flex-row items-center justify-start py-7 px-5 flex-wrap h-screen"
    >
      {data.map((item, index) => (
        <View className="flex w-1/3 items-center " key={index}>
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
              router.push(item.key as never)
              dispatch(toggleTopBar());
            }}
          />
          <Text className="font-[Poppins-Black] text-[#5156BE] uppercase font-bold">
            {item.text}
          </Text>
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
        <Text className="font-[Poppins-Black] text-[#5156BE]">{"Déconnexion"}</Text>
      </View>
    </Animated.View>
  );
}
