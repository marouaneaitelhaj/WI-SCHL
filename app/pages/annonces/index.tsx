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
      <Text className={" text-[#5156BE] px-5 font-bold text-xl"}>
        Announce
      </Text>
      <ScrollView
        className="flex flex-col" 
        style={{ height: "85%" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.annonce_body} annonce={annonce} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
