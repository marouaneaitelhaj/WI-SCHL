import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import {
  setProfileStatus,
  setShowProfile,
} from "../../state/Profile/ProfileSlice";
import { useEffect, useState } from "react";
import Animated, {
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function TopSectionForProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  const { profileStatus } = useSelector((state: RootState) => state.profile);

  const [showDropDown, setShowDropDown] = useState(false);

  const dispatch = useAppDispatch();

  const animatedHeight = useSharedValue(0);

  useEffect(() => {
    // Animate height when showDropDown changes
    animatedHeight.value = withTiming(showDropDown ? 120 : 0, {
      duration: 300,
    });
  }, [showDropDown, animatedHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      overflow: "hidden",
    };
  });

  return (
    <>
      <View
        className={
          "space-y-5 py-10 relative  rounded-bl-[50px] rounded-br-[50px] flex items-center bg-[#5156BE]"
        }
      >
        <View className="absolute top-6 flex flex-row  w-screen">
          <Pressable
            className="flex flex-row space-x-4 absolute left-7"
            onPress={() => {
              dispatch(setShowProfile(false));
            }}
          >
            <Icon source="arrow-left" size={30} color="white" />
            <Text className="font-[Poppins-Black] text-white text-xl">Profile</Text>
          </Pressable>
          <View className="absolute right-7 flex flex-col space-y-3">
            <Pressable onPress={() => setShowDropDown(!showDropDown)}>
              <Icon
                source={showDropDown ? "menu-up" : "menu-down"}
                size={30}
                color="white"
              />
            </Pressable>
            <Animated.View style={animatedStyle} className={"space-y-3"}>
              {showDropDown && (
                <>
                  <Pressable
                    onPress={() => {
                      dispatch(setProfileStatus(0));
                      // setShowDropDown(false);
                    }}
                  >
                    <Icon source="eye" size={30} color="white" />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      dispatch(setProfileStatus(1));
                      // setShowDropDown(false);
                    }}
                  >
                    <Icon source="pen" size={30} color="white" />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      dispatch(setProfileStatus(2));
                      // setShowDropDown(false);
                    }}
                  >
                    <Icon source="lock" size={30} color="white" />
                  </Pressable>
                </>
              )}
            </Animated.View>
          </View>
        </View>
        <View className={" flex items-center py-5 space-y-3"}>
          <Image
            src={
              user?.img
                ? "http://ensemc.irma-prod.net/storage/" + user?.img
                : "http://ensemc.irma-prod.net/" + user?.image
            }
            className="w-28 rounded-full h-28"
          />
          <View className="flex items-center">
            <Text className="font-[Poppins-Black] text-white text-lg">
              {user?.prenom_fr + " " + user?.nom_fr}
            </Text>
            <Text className="font-[Poppins-Black] text-white text-sm">
              {user?.prenom_fr + " " + user?.nom_fr}
            </Text>
          </View>
        </View>
        <Image
          source={require("@assets/backround_pattern.png")}
          className="absolute -z-20"
        />
      </View>
    </>
  );
}
