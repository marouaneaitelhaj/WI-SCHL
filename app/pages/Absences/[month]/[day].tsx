import { useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, Button } from "react-native";
import { IconButton } from "react-native-paper";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

export default function Absences() {
  const { day } = useLocalSearchParams();

  const { month } = useLocalSearchParams();

  const [file, setFile] = useState({ uri: "", base64: "" });

  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (!result.canceled) {
      let base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setFile({ uri: result.assets[0].uri, base64 });
    }
  };

  return (
    <View className=" flex items-center space-y-10">
      <Pressable className="bg-[#F4F5F9] p-10 rounded-full" onPress={pickFile}>
        <IconButton
          className="bg-[#F4F5F9]"
          iconColor="#5156BE"
          size={120}
          icon={"cloud-upload-outline"}
        />
      </Pressable>
      <Text className="font-[Poppins-Black] text-[#5156BE] text-center px-10 text-lg font-bold mt-5">
        Télécharger un justificatif d'absence pour le {day}/{month}
      </Text>
      <Pressable
        disabled={file.uri === ""}
        className={
          "bg-[#5156BE] p-5 rounded-lg" +
          (file.uri === "" ? " bg-[#e0e1f3]" : "")
        }
      >
        <Text className="font-[Poppins-Black] text-white text-center">Télécharger</Text>
      </Pressable>
    </View>
  );
}
