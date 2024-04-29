import { Image, Pressable } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { enableGoBack } from "../state/TopBar/TopBarSlice";


export default function InformationspersonnelsProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  return (
    <>
      <View
        className={"space-y-5 flex items-center bg-[#1E9FF2] rounded-t-3xl"}
      >
        <View className={" flex items-center py-5"}>
          <Image
            src={
              user?.img
                ? "http://ensemc.irma-prod.net/storage/" + user?.img
                : "http://ensemc.irma-prod.net/" + user?.image
            }
            className="w-24 h-24 rounded-full"
          />
          <Text className={"my-2 text-white"}>
            {user?.nom_fr} {user?.prenom_fr}
          </Text>
          {(user?.nom_ar || user?.prenom_ar) && (
            <Text className={"my-2 text-white"}>
              {user?.nom_ar} {user?.prenom_ar}
            </Text>
          )}
        </View>
      </View>
      <View className="space-y-5 px-5 my-5">
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Email:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.email}</Text>
        </View>
        {/* <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">E-mail académique:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.email}</Text>
        </View> */}
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Fillier:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.fillier}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Cin:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.cin}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Cne:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.cne}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Code inscription:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.code_inscription}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Date naissance:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.date_naissance}</Text>
        </View>
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Lieu naissance_fr:</Text>
          <Text className="text-[#1E9FF2] w-2/3">
            {user?.lieu_naissance_fr}
          </Text>
        </View>
        {user?.lieu_naissance_ar && (
          <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
            <Text className="text-[black] w-1/3">مكان الازدياد</Text>
            <Text className="text-[#1E9FF2] w-2/3">
              {user?.lieu_naissance_ar}
            </Text>
          </View>
        )}
        <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
          <Text className="text-[black] w-1/3">Adresse fr:</Text>
          <Text className="text-[#1E9FF2] w-2/3">{user?.adresse_fr}</Text>
        </View>
        {user?.adresse_ar && (
          <View className="flex flex-row space-x-2 w-full border-b-[0.25px] pb-4 border-[#1E9FF2]">
            <Text className="text-[black] w-1/3">العنوان الحالي:</Text>
            <Text className="text-[#1E9FF2] w-2/3">{user?.adresse_ar}</Text>
          </View>
        )}
        <View className="w-full flex justify-center items-center ">
          <Pressable
            onPress={() => {
              navigation.navigate("ModifierLaMotDePass" as never);
              dispatch(enableGoBack());
            }}
            className={
              "flex rounded-md w-[90%] justify-center items-center  p-5 bg-[#1E9FF2]"
            }
          >
            <Text className="text-white text-[20px]">
              Modifier le mot de pass
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
