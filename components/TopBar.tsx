import { Text, View, Image, Pressable } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";
import { IconButton } from "react-native-paper";
import {
  closeTopBar,
  disableGoBack,
  toggleTopBar,
} from "../state/TopBar/TopBarSlice";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../static/colors";

export default function TopBar() {
  const { open, goBack } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  return (
    <>
      <View
        className={
          "z-20 py-5 bg-[" +
          COLORS.primaryColor +
          "] w-screen rounded-bl-[50px] rounded-br-[50px] flex flex-row items-center justify-between px-5"
        }
      >
        <View className="flex flex-row items-center justify-center">
          {open && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="close"
              iconColor="white"
              size={50}
            />
          )}
          {!open && !goBack && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="dots-grid"
              iconColor="white"
              size={50}
            />
          )}
          {!open && goBack && (
            <IconButton
              onPress={() => {
                navigation.goBack();
                dispatch(disableGoBack());
              }}
              icon="arrow-left"
              iconColor="white"
              size={50}
            />
          )}
        </View>
        <Pressable
          className="flex flex-row items-center justify-center"
          onPress={() => {
            navigation.navigate("Profile" as never);
            dispatch(closeTopBar());
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
      {open && <TopBarElements />}
    </>
  );
}
