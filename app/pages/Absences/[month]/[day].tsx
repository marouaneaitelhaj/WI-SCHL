import { useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function Absences() {
  const { day } = useLocalSearchParams();

  const { month } = useLocalSearchParams();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    })
      .then((result) => {
        if (!result.canceled) {
          if (result.assets.length > 0) {
            // setImage({
            //   uri: result.assets[0].uri,
            //   base64: result.assets[0].base64 as string,
            // });
          }
        }
      })
      .catch((error) => {});
  };

  return (
    <View className=" flex items-center space-y-10">
      <Pressable className="bg-[#F4F5F9] p-10 rounded-full" onPress={pickImage}>
        <IconButton
          className="bg-[#F4F5F9]"
          iconColor="#5156BE"
          size={120}
          icon={"cloud-upload-outline"}
        />
      </Pressable>
      <Text className="text-[#5156BE] text-center px-10 text-lg font-bold mt-5">
        Télécharger un justificatif d'absence pour le {day}/{month}
      </Text>
    </View>
  );
}
