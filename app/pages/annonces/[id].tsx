import { enableGoBack } from "@state/TopBar/TopBarSlice";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { getAnnonce } from "state/Annonces/AnnoncesActions";
import { useAppDispatch } from "state/store";
import { Tannonce } from "state/types";

export default function Annonce() {
  // get param body
  const { id } = useLocalSearchParams();
  const [annonce, setAnnonce] = useState<Tannonce>({} as Tannonce);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(enableGoBack())
    dispatch(getAnnonce(id as string))
      .unwrap()
      .then((data) => {
        setAnnonce(data[0]);
      })
      .catch((err) => {});
  }, []);

  return (
    <ScrollView style={{ height : "50%" }}>
      <View className="p-10 space-y-10">
        <Text className="font-bold">{annonce.annonce_title}</Text>
        <Text>{annonce.annonce_body}</Text>
      </View>
    </ScrollView>
  );
}
