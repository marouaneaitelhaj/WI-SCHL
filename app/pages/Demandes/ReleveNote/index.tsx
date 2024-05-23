import AttestationCard from "app/components/Demandes/AttestationCard";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { Checkbox, Title } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  createDemande,
  cancelDemande,
  getDemandes,
} from "state/Demandes/ReleveNote/ReleveNoteActions";
import { RootState, useAppDispatch } from "state/store";
export default function ReleveNote() {
  const dispatch = useAppDispatch();

  const { data, status } = useSelector((state: RootState) => state.releveNote);
  useEffect(() => {
    dispatch(getDemandes());
  }, []);
  return (
    <View className="space-y-5 flex items-center w-full">
      <Title className="text-center font-bold uppercase">Relevé de notes</Title>
      <ScrollView className="w-full h-[70%]">
        <View className="flex w-full">
          {status === "loading" && (
            <ActivityIndicator size="large" color="#5156BE" />
          )}
          {status !== "loading" &&
            data.map((item) => (
              <AttestationCard
                cancelDemande={cancelDemande}
                key={item.num_dem}
                data={item}
              />
            ))}
          {status !== "loading" && data.length === 0 && (
            <View className="flex my-14 justify-center items-center h-[30px] ">
              <Text className="font-[Poppins-Black] text-[#5156BE] font-bold text-xl">
                Aucune demande
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View className="flex  w-full items-center">
        <Pressable
          className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]"
          onPress={() => {
            router.push("/pages/Demandes/ReleveNote/ReleveNoteForm");
          }}
        >
          <Text className="font-[Poppins-Black] text-white text-center">
            Déposer une nouvelle demande
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
