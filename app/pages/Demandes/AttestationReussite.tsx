import AttestationCard from "app/components/AttestationCard";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { Modal, Title } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  createDemande,
  cancelDemande,
  getDemandes,
} from "state/Demandes/AttestationReussite/AttestationReussiteActions";
import { RootState, useAppDispatch } from "state/store";
export default function AttestationReussite() {
  const dispatch = useAppDispatch();
  const { data, status } = useSelector(
    (state: RootState) => state.attestationReussite
  );
  useEffect(() => {
    dispatch(getDemandes());
  }, []);
  return (
    <View className="space-y-5 flex items-center w-full">
      <Title className="text-center font-bold uppercase">
        Attestations de réussite
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
          {status !== "loading" && data.length === 0 && (
            <View className="flex my-14 justify-center items-center h-[30px] ">
              <Text className="text-[#5156BE] font-bold text-xl">
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
                    dispatch(createDemande())
                      .unwrap()
                      .then((res) => {
                        Alert.alert(
                          "Demande envoyée",
                          "Votre demande a été envoyée avec succès"
                        );
                      })
                      .catch((err) => {
                        Alert.alert(
                          "Erreur",
                          "Une erreur s'est produite lors de l'envoi de la demande"
                        );
                      });
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
    </View>
  );
}
