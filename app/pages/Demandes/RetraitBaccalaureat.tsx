import { enableGoBack } from "@state/TopBar/TopBarSlice";
import AttestationCard from "app/components/AttestationCard";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { Checkbox, Title } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  createDemande,
  cancelDemande,
  getDemandes,
} from "state/Demandes/RetraitBaccalaureat/RetraitBaccalaureatActions";
import { RootState, useAppDispatch } from "state/store";
export default function RetraitBaccalaureat() {
  const dispatch = useAppDispatch();
  const [checkedNumber, setCheckedNumber] = useState(1);
  const { data, status } = useSelector(
    (state: RootState) => state.retraitBaccalaureat
  );
  useEffect(() => {
    dispatch(getDemandes());
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <View className="space-y-5 flex items-center w-full">
      <Title className="text-center font-bold uppercase">
        Retrait du Baccalauréat
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
        <Pressable
          className="flex  rounded-md w-[100%] justify-center items-center  p-5 bg-[#5156BE]"
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text className="text-white text-center">
            Déposer une nouvelle demande
          </Text>
        </Pressable>
      </View>
      {/* <Modal
        title="Êtes-vous sûr de vouloir créer cette demande ?"
        showModal={showModal}
        close={() => setShowModal(false)}
      >
        <Checkbox.Item
          onPress={() => setCheckedNumber(1)}
          status={checkedNumber == 1 ? "checked" : "unchecked"}
          label="Retrait temporaire"
        />
        <Checkbox.Item
          onPress={() => setCheckedNumber(2)}
          status={checkedNumber == 2 ? "checked" : "unchecked"}
          label="Retrait définitif"
        />
        <Pressable
          className="bg-[#5156BE] my-2 p-2 rounded-md w-[100%] justify-center items-center"
          onPress={() => {
            setShowModal(false);
            Alert.alert(
              "Êtes-vous sûr de vouloir créer cette demande ?",
              "Êtes-vous sûr de vouloir créer cette demande ?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Confirmer",
                  style: "destructive",
                  onPress: () => {
                    dispatch(createDemande(checkedNumber))
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
          <Text className="text-white">Confirmer</Text>
        </Pressable>
      </Modal> */}
    </View>
  );
}
