import { View, Image, Pressable } from "react-native";
import TopBarElements from "./TopBarElements";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import { IconButton } from "react-native-paper";
import { disableGoBack, toggleTopBar } from "../../state/TopBar/TopBarSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../static/colors";
import { setShowProfile } from "../../state/Profile/ProfileSlice";

export default function TopBar() {
  const { open, goBack } = useSelector((state: RootState) => state.topBar);

  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  return (
    <View className="bg-white pb-5">
      <View
        className={
          "z-20 pt-11 pb-5  bg-[" +
          COLORS.primaryColor +
          "] w-screen rounded-bl-[50px]  flex flex-row items-center justify-between px-5"
        }
        style={
          {
            // i want Inverted corners
          }
        }
      >
        <Image
          source={require("@assets/backround_pattern.png")}
          className="absolute"
        />
        <View className="flex flex-row items-center justify-center">
          {open && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="close"
              iconColor="white"
              size={40}
            />
          )}
          {!open && !goBack && (
            <IconButton
              onPress={() => dispatch(toggleTopBar())}
              icon="dots-grid"
              iconColor="white"
              size={40}
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
            // navigation.navigate("pages/Profile" as never);
            // console.log("profile");

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
      <View style={{
        shadowColor: "#000",
      }} className="absolute w-screen bg-red-500 z-50  h-10 bottom-0 right-0  rounded-tr-full"></View>
      {open && <TopBarElements />}
    </View>
  );
}
