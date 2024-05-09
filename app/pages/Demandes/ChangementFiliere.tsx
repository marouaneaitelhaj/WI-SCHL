import { openModal } from "@state/Modal/ModalSlice";
import { RootState, useAppDispatch } from "@state/store";
import ChangementFiliereForm from "app/components/ChangementFiliereForm";
import { Modal } from "app/components/Modal";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";
export default function ChangementFiliere() {
  const dispatch = useAppDispatch();
  return (
    <View className="flex justify-center">
      <Title className="text-center font-bold">Changement de filière</Title>
      <>
        <View className="flex items-center space-y-5 my-10">
          <Text className="text-center">
            Mes demandes d'attestations d'inscription
          </Text>
          <Pressable
            className="flex  rounded-md w-[90%] justify-center items-center  p-5 bg-[#5156BE]"
            onPress={() => {
              // dispatch(openModal(<ChangementFiliereForm /> as React.ReactNode));
            }}
          >
            <Text className="text-white text-center">
              Déposer une nouvelle demande
            </Text>
          </Pressable>
        </View>
        <Text>Demande est en cours de traitement</Text>
        <Text className="font-bold">Remarques</Text>
        <Text>
          L'attestation d'inscription est pour l'année en cours seulement
        </Text>
        <Text>
          L'étudiant doit conserver l’original d'attestation d'inscription et
          fournir une copie identique de l’original au besoin
        </Text>
      </>
    </View>
  );
}
