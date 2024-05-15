import { Image, Pressable } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { enableGoBack } from "../../state/TopBar/TopBarSlice";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { setProfileStatus } from "state/Profile/ProfileSlice";

export default function InformationspersonnelsProfile(props: {
  profileStatus: number;
}) {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  if (props.profileStatus != 0) {
    return null;
  }
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
      <View className="space-y-5 px-5 my-5">
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Prenom:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.prenom_fr}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Nom:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.nom_fr}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Email:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.email}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">E-mail académique:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.email}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Fillier:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.fillier}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Cin:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.cin}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Cne:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.cne}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Code inscription:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.code_inscription}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Date naissance:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.date_naissance}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Lieu naissance_fr:</Text>
          <Text className="text-[#5156BE] w-2/3">
            {user?.lieu_naissance_fr}
          </Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">Adresse fr:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.adresse_fr}</Text>
        </View>
        <View className="flex flex-row-reverse space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">الاسم الشخصي:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.prenom_ar}</Text>
        </View>
        <View className="flex flex-row-reverse space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">الاسم العائلي:</Text>
          <Text className="text-[#5156BE] w-2/3">
            {user?.lieu_naissance_ar}
          </Text>
        </View>
        <View className="flex flex-row-reverse space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">مكان الازدياد:</Text>
          <Text className="text-[#5156BE] w-2/3">
            {user?.lieu_naissance_ar}
          </Text>
        </View>
        <View className="flex flex-row-reverse space-x-2 w-full border-b-[0.25px] pb-4 border-[#5156BE]">
          <Text className="text-[black] w-1/3">العنوان الحالي:</Text>
          <Text className="text-[#5156BE] w-2/3">{user?.adresse_ar}</Text>
        </View>
        <View className="w-full flex justify-center items-center ">
          <Pressable
            onPress={() => {
              dispatch(setProfileStatus(2));
            }}
            className={
              "flex rounded-md w-[90%] justify-center items-center  p-5 bg-[#5156BE]"
            }
          >
            <Text className="text-white text-[20px]">
              Modifier le mot de pass
            </Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}
