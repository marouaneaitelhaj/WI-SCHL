import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import { setEditProfile, setShowProfile } from "../../state/Profile/ProfileSlice";

export default function TopSectionForProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  const { editProfile } = useSelector((state: RootState) => state.profile);

  const dispatch = useAppDispatch();

  return (
    <View
      className={
        "space-y-5 py-10 relative  rounded-bl-[50px] rounded-br-[50px] flex items-center bg-[#1E9FF2] rounded-tl-3xl"
      }
    >
      
      <View className="absolute top-10 flex flex-row  w-screen">
        <Pressable
          className="flex flex-row space-x-4 absolute left-4"
          onPress={() => {
            dispatch(setShowProfile(false));
          }}
        >
          <Icon source="arrow-left" size={30} color="white" />
          <Text className="text-white text-xl">Profile</Text>
        </Pressable>
        <View className="absolute right-4">
          <Pressable
            // className="absolute top-5 right-5"
            onPress={() => {
              dispatch(setEditProfile(!editProfile));
            }}
          >
            {!editProfile && <Icon source="pencil" size={30} color="white" />}
            {editProfile && <Icon source="eye" size={30} color="white" />}
          </Pressable>
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
          <Text className="text-white text-lg">
            {user?.prenom_fr + " " + user?.nom_fr}
          </Text>
          <Text className="text-white text-sm">
            {user?.prenom_fr + " " + user?.nom_fr}
          </Text>
        </View>
      </View>
      <Image
        source={require("@assets/backround_pattern.png")}
        className="absolute -z-20"
      />
    </View>
  );
}
