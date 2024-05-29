import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

export default function Notes() {
  return (
    <View className="space-y-2 mx-5 my-5">
      <View className="space-y-2">
        <Text>Filière</Text>
        <Picker placeholder="Choisissez la filière">
          <Picker.Item label="Choisissez la filière" value="" enabled={false} />
          <Picker.Item label="Filière 1" value="1" />
          <Picker.Item label="Filière 2" value="2" />
          <Picker.Item label="Filière 3" value="3" />
        </Picker>
      </View>
      <View className="space-y-2">
        <Text>Semestre</Text>
        <Picker placeholder="Choisissez Semestre">
          <Picker.Item label="Choisissez Semestre" value="" enabled={false} />
          <Picker.Item label="Semestre 1" value="1" />
          <Picker.Item label="Semestre 2" value="2" />
          <Picker.Item label="Semestre 3" value="3" />
        </Picker>
      </View>
      <View className="space-y-2">
        <Text>Module</Text>
        <Picker placeholder="Choisissez Module">
          <Picker.Item label="Choisissez Module" value="" enabled={false} />
          <Picker.Item label="Module 1" value="1" />
          <Picker.Item label="Module 2" value="2" />
          <Picker.Item label="Module 3" value="3" />
        </Picker>
      </View>
      <View className="space-y-2">
        <Text>Élément</Text>
        <Picker placeholder="Choisissez Élément">
          <Picker.Item label="Choisissez Élément" value="" enabled={false} />
          <Picker.Item label="Élément 1" value="1" />
          <Picker.Item label="Élément 2" value="2" />
          <Picker.Item label="Élément 3" value="3" />
        </Picker>
      </View>
      <Pressable
        className="bg-[#5156BE] p-2 rounded-md"
        onPress={() => router.push("/prof/Notes/result")}
      >
        <Text className="text-white text-center">Search</Text>
      </Pressable>
    </View>
  );
}
