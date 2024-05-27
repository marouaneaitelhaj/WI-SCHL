import { View, Text, Image, Pressable } from "react-native";
import { Icon } from "react-native-paper";
import { Tannonce } from "state/types";
import { router } from "expo-router";
import { useAppDispatch } from "@state/store";
import { setAnnonce } from "@state/Annonces/AnnoncesSlice";

export default function AnnonceCard({
  annonce,
  bg = "#e0e1f3",
}: {
  annonce: Tannonce;
  bg?: string;
}) {
  const dispatch = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setAnnonce(annonce));
        router.push({ pathname: "/student/annonces/" + annonce.id });
      }}
      style={{ backgroundColor: bg }}
      className={"flex space-y-4 p-3 m-3 rounded-xl w-40"}
    >
      <View className="bg-white w-[30px] rounded-md">
        <Image
          source={require("@assets/notice.png")}
          className="w-[40px] h-[40px]"
        />
      </View>
      <View style={{ flexDirection: "row" }} className="w-full">
        <Text
          className="font-bold"
          numberOfLines={3}
          style={{ flex: 1, flexWrap: "wrap" }}
        >
          {annonce.annonce_title || annonce.titre}
        </Text>
      </View>
      {annonce.date && <Text className="font-[Poppins-Black] font-light text-gray-400">
        {annonce.date}
      </Text>}
    </Pressable>
  );
}
