import { View, Image, Pressable } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import { IconButton } from "react-native-paper";
import { toggleTopBar } from "../../state/TopBar/TopBarSlice";
import { COLORS } from "../../static/colors";
import { setShowProfile } from "../../state/Profile/ProfileSlice";
import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

export default function TopBar() {
  const { open } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const navState = useRootNavigationState();

  useEffect(() => {}, [navState]);

  return (
    <View className="bg-white">
      <View
        className={
          "z-20 pt-3 pb-5  bg-[" +
          COLORS.primaryColor +
          "] w-screen rounded-bl-[50px]  flex flex-row items-center justify-between px-5"
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
          {!open &&
            (router.canGoBack() ? (
              <IconButton
                onPress={() => {
                  router.back();
                }}
                icon="arrow-left"
                iconColor="white"
                size={40}
              />
            ) : (
              <IconButton
                onPress={() => dispatch(toggleTopBar())}
                icon="dots-grid"
                iconColor="white"
                size={40}
              />
            ))}
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
                : "http://ensemc.irma-prod.net/" + user?.image
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
      {open && <TopBarElements />}
    </View>
  );
}
