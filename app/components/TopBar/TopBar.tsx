import { View, Image, Pressable, Text } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../state/store";
import { IconButton } from "react-native-paper";
import { toggleTopBar } from "../../../state/TopBar/TopBarSlice";
import { COLORS } from "../../../static/colors";
import { setShowProfile } from "../../../state/Profile/ProfileSlice";
import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

const dataS = [
  { key: "/student/Demandes", text: "Demandes", icon: "inbox" },
  { key: "/student/Notes", text: "Notes", icon: "numeric" },
  { key: "/student/Absences", text: "Absences", icon: "table-account" },
  { key: "/student/Emploi", text: "Emploi", icon: "clock-time-eight" },
  { key: "/student/annonces", text: "Annonces", icon: "bullhorn" },
];

const dataP = [
  { key: "/prof/Etudiants", text: "Etudiants", icon: "account-group" },
  {
    key: "/prof/Disponibilite",
    text: "Disponibilite",
    icon: "calendar-blank-multiple",
  },
  { key: "/prof/Absences", text: "Absences", icon: "table-account" },
  { key: "/prof/Notes", text: "Notes", icon: "numeric" },
];

export default function TopBar() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const { user, type } = useSelector((state: RootState) => state.auth);
  const navState = useRootNavigationState();

  useEffect(() => {}, [navState]);

  return (
    <View className="bg-[#f2f3fa]">
      <View
        className={
          "z-20 pt-3 pb-5  bg-[#5156BE] w-screen rounded-bl-[50px]  flex flex-row items-center justify-between px-5"
        }
      >
        <Image
          source={require("@assets/backround_pattern.png")}
          className="absolute"
        />
        <View className="flex flex-row items-center justify-center">
          {open && (
            <IconButton
              onPress={() => {
                dispatch(toggleTopBar());
              }}
              icon="close"
              iconColor="white"
              size={40}
            />
          )}
          {!open && (
            <>
              <IconButton
                onPress={() => dispatch(toggleTopBar())}
                icon="dots-grid"
                iconColor="white"
                size={40}
              />
              <View>
                <Text className="text-white text-sm font-bold">
                  {user?.nom_fr + " " + user?.prenom_fr}
                </Text>
                <Text className="text-white text-xs font-extralight">
                  {user?.email}
                </Text>
              </View>
            </>
          )}
        </View>
        <Pressable
          className="flex flex-row items-center justify-center"
          onPress={() => {
            dispatch(setShowProfile(true));
          }}
        >
          <Image
            className="w-12 h-12 rounded-full"
            src={
              user?.img
                ? "http://ensemc.irma-prod.net/storage/" + user?.img
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </Pressable>
      </View>
      <View
        style={{
          shadowColor: "#000",
        }}
        className="absolute w-32 bg-[#5156BE] z-50  h-32 -bottom-28 right-0 "
      ></View>
      {open && type == "prof" && <TopBarElements data={dataP} />}
      {open && type == "etudiant" && <TopBarElements data={dataS} />}
    </View>
  );
}
