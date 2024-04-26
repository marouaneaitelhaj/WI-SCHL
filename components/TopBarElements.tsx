import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, View, Text } from "react-native";
import { faClock, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "react-native-paper";

const data = [
  { key: "Accueil", icon: "home-circle" },
  { key: "Emploi", icon: "clock-time-eight" },
  { key: "Annonces", icon: "bullhorn" },
  { key: "Profil", icon: "account-circle" },
];

export default function TopBarElements() {
  return (
    <View className="w-screen rounded-t-[50px] flex flex-row items-center justify-around py-7 px-5 flex-wrap" >
      {data.map((item, index) => (
        <View className="flex items-center">
          <Avatar.Icon
            className="border-2 border-[#1E9FF2]"
            style={{
              backgroundColor: "transparent",
              margin: 5,
            }}
            size={80}
            color="#1E9FF2"
            icon={item.icon}
          />
          <Text className="text-[#1E9FF2]">{item.key}</Text>
        </View>
      ))}
    </View>
  );
}
