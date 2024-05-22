import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Disponibilite() {
  return (
    <View>
      <Pressable
        className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]"
        onPress={() => {
          router.push(
            "/pages/Disponibilite/DisponibiliteForm"
          );
        }}
      >
        <Text className="font-[Poppins-Black] text-white text-center">
          Déposer une nouvelle demande
        </Text>
      </Pressable>
    </View>
  );
}
