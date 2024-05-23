
import AnnoncesWrapper from "app/components/Annonce/AnnounceWrapper";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  getAnnonces,
  getVisEntreprise,
  getVisScolaire,
} from "state/Annonces/AnnoncesActions";
import { RootState, useAppDispatch } from "state/store";

export default function Annonces() {
  const dispatch = useAppDispatch();

  const { annonces, VisEntreprise, VisScolaire } = useSelector(
    (state: RootState) => state.annonces
  );

  useEffect(() => {
    dispatch(getAnnonces());
    dispatch(getVisEntreprise());
    dispatch(getVisScolaire());
  }, []);
  return (
    <View className="">
      <ScrollView className="bg-[#f2f3fa]" style={{ height: "85%" }}>
        <AnnoncesWrapper key={1} annonces={annonces} />
        <AnnoncesWrapper
          key={2}
          title="Les offres de stage"
          annonces={VisEntreprise}
        />
        <AnnoncesWrapper
          key={3}
          title="Applications universitaire"
          annonces={VisScolaire}
        />
      </ScrollView>
    </View>
  );
}
