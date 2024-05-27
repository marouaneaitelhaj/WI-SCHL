import { useState } from "react";
import { Alert, Pressable } from "react-native";
import {
  createDemande,
  cancelDemande,
  getDemandes,
} from "state/Demandes/ReleveNote/ReleveNoteActions";
import { Checkbox, Text } from "react-native-paper";
import { useAppDispatch } from "@state/store";
import { router } from "expo-router";

export default function ReleveNoteForm() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const [checkedNumber, setCheckedNumber] = useState(1);
  return (
    <>
      <Checkbox.Item
        onPress={() => setCheckedNumber(1)}
        status={checkedNumber == 1 ? "checked" : "unchecked"}
        label="1ère session"
      />
      <Checkbox.Item
        onPress={() => setCheckedNumber(2)}
        status={checkedNumber == 2 ? "checked" : "unchecked"}
        label="2ème session"
      />
      <Checkbox.Item
        onPress={() => setCheckedNumber(3)}
        status={checkedNumber == 3 ? "checked" : "unchecked"}
        label="Annuel"
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
                        "Votre demande a été envoyée avec succès",
                        [
                          {
                            text: "OK",
                            onPress: () => {
                              router.back();
                            },
                          },
                        ]
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
        <Text className="font-[Poppins-Black] text-white">Confirmer</Text>
      </Pressable>
    </>
  );
}
