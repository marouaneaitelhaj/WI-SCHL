import AnnonceCard from "app/components/AnnonceCard";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { getAnnonces } from "state/Annonces/AnnoncesActions";
import { RootState, useAppDispatch } from "state/store";

export default function Annonces() {
  const dispatch = useAppDispatch();

  const { annonces } = useSelector((state: RootState) => state.annonces);

  useEffect(() => {
    dispatch(getAnnonces());
  }, []);
  return (
    <View>
      <Text className={"my-4 text-[#1E9FF2] px-5 font-bold text-xl"}>
        Announce
      </Text>
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row pb-64 flex-wrap">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.annonce_body} annonce={annonce} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
