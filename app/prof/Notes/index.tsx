import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Notes() {
  return (
    <View className="space-y-2 mx-5 my-5">
      <View className="space-y-2">
        <Text>Filière</Text>
        <Pressable className="px-3 py-2 border-[#CED4DA] border rounded-md" onPress={() =>{
          router.push("prof/Notes/modal")
        }}>
          <Text>Choisissez la filière</Text>
        </Pressable>
      </View>
      <View className="space-y-2">
        <Text>Semestre</Text>
        <Pressable className="px-3 py-2 border-[#CED4DA] border rounded-md">
          <Text>Choisissez Semestre</Text>
        </Pressable>
      </View>
      <View className="space-y-2">
        <Text>Module</Text>
        <Pressable className="px-3 py-2 border-[#CED4DA] border rounded-md">
          <Text>Choisissez le Module</Text>
        </Pressable>
      </View>
      <View className="space-y-2">
        <Text>Élément</Text>
        <Pressable className="px-3 py-2 border-[#CED4DA] border rounded-md">
          <Text>Choisissez Élément</Text>
        </Pressable>
      </View>
    </View>
  );
}
