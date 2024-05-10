import AttestationCard from "app/components/AttestationCard";
import { useEffect } from "react";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { Modal, Title } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  demandeAttestation,
  getAttestationInscriptionValues,
} from "state/Demandes/AttestationInscription/AttestationInscriptionActions";
import { RootState, useAppDispatch } from "state/store";
export default function AttestationInscription() {
  const dispatch = useAppDispatch();
  const { data } = useSelector(
    (state: RootState) => state.attestationInscription
  );
  useEffect(() => {
    dispatch(getAttestationInscriptionValues());
  }, []);
  return (
    <View className="space-y-5 flex items-center w-full">
      <Title className="text-center font-bold">Attestation d'inscription</Title>
      <View className="flex  w-full items-center">
        <Pressable
          className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]"
          onPress={() => {
            Alert.alert(
              "Envoyer la demande",
              "Êtes-vous sûr de vouloir créer cette demande ?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Confirmer et Envoyer",
                  style: "destructive",
                  onPress: () => {
                    dispatch(demandeAttestation());
                  },
                },
              ]
            );
          }}
        >
          <Text className="text-white text-center">
            Déposer une nouvelle demande
          </Text>
        </Pressable>
      </View>
      <ScrollView className="w-full h-[40%]">
        <View className="flex w-full">
          {/* <Text className="font-bold">Mes demandes d'attestations d'inscription</Text> */}
          {data.map((item) => (
            <AttestationCard key={item.num_dem} data={item} />
          ))}
        </View>
      </ScrollView>
      <View className="w-full">
        <Text className="font-bold">Remarques</Text>
        <Text>
          L'attestation d'inscription est pour l'année en cours seulement
        </Text>
        <Text>
          L'étudiant doit conserver l’original d'attestation d'inscription et
          fournir une copie identique de l’original au besoin
        </Text>
      </View>
    </View>
  );
}
