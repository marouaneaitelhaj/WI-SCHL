import { getDisponibilites } from "@state/Disponibilite/DisponibiliteActions";
import { RootState, useAppDispatch } from "@state/store";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import DisponibiliteCalendar from "./DisponibiliteCalendar";
import { ActivityIndicator } from "react-native-paper";

export default function Disponibilite() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDisponibilites());
  }, []);
  const { data, status } = useSelector(
    (state: RootState) => state.disponibilite
  );
  return (
    <View className="space-y-3">
      {status === "loading" && (
        <View className="w-screen flex justify-center items-center bg-transparent opacity-70">
          <ActivityIndicator size="large" color="#5156BE" />
        </View>
      )}
      <ScrollView className="h-[75%]">
        {data?.periodes?.map((periode, index) => (
          <DisponibiliteCalendar
            key={index}
            title={periode.periode}
            periode={periode}
          />
        ))}
      </ScrollView>
      {/* <DisponibiliteCalendar /> */}
      <Pressable
        className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]"
        onPress={() => {
          router.push("/prof/Disponibilite/DisponibiliteForm");
        }}
      >
        <Text className="font-[Poppins-Black] text-white text-center">
          Ajouter une disponibilité
        </Text>
      </Pressable>
    </View>
  );
}
