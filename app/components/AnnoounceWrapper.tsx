import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import AnnonceCard from "./AnnonceCard";
import { Tannonce } from "@state/types";
import { useState } from "react";

export default function AnnoncesWrapper({
  annonces,
  title = "Annonces",
}: {
  annonces: Tannonce[];
  title?: string;
}) {
  
  const [expended, setExpended] = useState(false);
  return (
    <View className="bg-[#e0e1f3] my-2">
      <View className="flex flex-row items-center justify-between px-5">
        <Text className="font-[Poppins-Black] text-xl font-bold">
          {title} ({annonces.length})
        </Text>
        <IconButton
          onPress={() => setExpended(!expended)}
          icon={expended ? "chevron-up" : "chevron-down"}
          iconColor="black"
          size={30}
        />
      </View>
      {expended && (
        <View>
          <View className="flex flex-row flex-wrap">
            {annonces.map((annonce) => (
              <AnnonceCard bg="#ffffff" key={annonce.id} annonce={annonce} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
