import { View, Text } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";

export default function id() {
  return (
    <View>
      <View className="bg-[#5156BE] flex flex-row p-3 rounded-t-md">
        <Text className="text-white w-1/4">Code</Text>
        <Text className="text-white w-1/4">Nom</Text>
        <Text className="text-white w-1/4">Prénom</Text>
        <Text className="text-white w-1/4">Absence</Text>
      </View>
      <View className="bg-[#F8F9FA] flex flex-row p-3">
        <Text className="text-[#495057] w-1/4">Code</Text>
        <Text className="text-[#495057] w-1/4">Nom</Text>
        <Text className="text-[#495057] w-1/4">Prénom</Text>
        <Checkbox status="checked" />
      </View>
      <View className="bg-[#F8F9FA] flex flex-row p-3">
        <Text className="text-[#495057] w-1/4">Code</Text>
        <Text className="text-[#495057] w-1/4">Nom</Text>
        <Text className="text-[#495057] w-1/4">Prénom</Text>
        <Checkbox status="unchecked" />
      </View>
      <View className="bg-[#F8F9FA] flex flex-row p-3">
        <Text className="text-[#495057] w-1/4">Code</Text>
        <Text className="text-[#495057] w-1/4">Nom</Text>
        <Text className="text-[#495057] w-1/4">Prénom</Text>
        <Checkbox status="checked" />
      </View>
      <View className="bg-[#F8F9FA] flex flex-row p-3">
        <Text className="text-[#495057] w-1/4">Code</Text>
        <Text className="text-[#495057] w-1/4">Nom</Text>
        <Text className="text-[#495057] w-1/4">Prénom</Text>
        <Checkbox status="unchecked" />
      </View>
    </View>
  );
}
