import { View, Text, ScrollView } from "react-native";
import AnnonceCard from "../components/AnnonceCard";
import { RootState, useAppDispatch } from "state/store";
import { getAnnonces } from "state/Annonces/AnnoncesActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Accueil() {
  const dispatch = useAppDispatch();

  const { annonces } = useSelector((state: RootState) => state.annonces);

  useEffect(() => {
    dispatch(getAnnonces());
  }, []);


  return (
    <View className="m-2">
      <View>
        <Text className={"my-4 text-[#1E9FF2] font-bold text-xl"}>
          Announce
        </Text>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            {annonces &&
              annonces.map((annonce) => (
                <AnnonceCard key={annonce.annonce_body} annonce={annonce}></AnnonceCard>
              ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text className={"my-4 text-[#94CBF6]"}>HomeWork</Text>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            {/* <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
