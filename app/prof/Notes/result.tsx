import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";

export default function result() {
  return (
    <ScrollView horizontal>
      <ScrollView>
        <View className="bg-[#5156BE] rounded-md flex flex-row p-5">
          <View className="w-52">
            <Text className="text-white">Etudiant</Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Élément</Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Coefficient</Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Note Initiale </Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Note Rattrapage </Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Moyenne avant rattrapage </Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Moyenne générale </Text>
          </View>
          <View className="w-52">
            <Text className="text-white">Décision générale</Text>
          </View>
        </View>
        <View className="bg-white rounded-md flex flex-row p-5">
          <View className="w-52 flex justify-center space-y-2">
            <Text className="text-black">AIT HSSINE LOUBNA</Text>
            <Image
              className="h-32 w-32"
              src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/VA152359__1663113436.jpeg"
            />
          </View>
          <View className="w-52 flex justify-center">
            <Text className="text-black">ANGLAIS</Text>
          </View>
          <View className="w-52 flex justify-center">
            <Text className="text-black">0.37 </Text>
          </View>
          <View className="w-52 flex justify-center">
            <TextInput
              className="bg-transparent"
              placeholder="Note Initiale"
              underlineStyle={{
                display: "none",
              }}
            />
          </View>
          <View className="w-52 flex justify-center">
            {/* <Text className="text-black">Note Rattrapage </Text> */}
            <TextInput
              className="bg-transparent"
              placeholder="Note Rattrapage"
              underlineStyle={{
                display: "none",
              }}
            />
          </View>
          <View className="w-52 flex justify-center">
            <Text className="text-black">14.945 </Text>
          </View>
          <View className="w-52 flex justify-center">
            <Text className="text-black">14.945 </Text>
          </View>
          <View className="w-52 flex justify-center">
            <Text className="text-black">Validé</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
