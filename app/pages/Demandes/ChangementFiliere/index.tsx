import { enableGoBack } from "@state/TopBar/TopBarSlice";
import AttestationCard from "app/components/AttestationCard";
import ChangementFiliereForm from "app/components/ChangementFiliereForm";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  createDemande,
  cancelDemande,
  getDemandes,
} from "state/Demandes/ChangementFiliere/ChangementFiliereActions";
import { RootState, useAppDispatch } from "state/store";
export default function ChangementFiliere() {
  const dispatch = useAppDispatch();
  const { data, status } = useSelector(
    (state: RootState) => state.changementFiliere
  );
  useEffect(() => {
    dispatch(getDemandes());
  }, []);
  return (
    <View className="space-y-5 flex items-center w-full">
      <Title className="text-center font-bold uppercase">
        Changement de filière
      </Title>
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
        </View>
      </ScrollView>
      <View className="flex  w-full items-center">
        <Link href="/ChangementFiliere/modal" className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]">
          <Text className="text-white text-center">
            Déposer une nouvelle demande
          </Text>
        </Link>
      </View>
    </View>
  );
}
