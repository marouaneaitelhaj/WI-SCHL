import { View, Text, Pressable, Alert } from "react-native";
import { Modal, Title } from "react-native-paper";
export default function ReleveNote() {
  return (
    <View className="flex justify-center">
      <Title className="text-center font-bold">Relevé de notes</Title>
      <View className="flex items-center space-y-5 my-10">
        <Text className="text-center">Mes demandes de relevé des notes</Text>
        <Pressable
          className="flex  rounded-md w-[90%] justify-center items-center  p-5 bg-[#1E9FF2]"
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
                    // dispatch(logout());
                    // dispatch(closeTopBar());
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
      <Text>Demande est en cours de traitement</Text>
      <Text className="font-bold">Remarques</Text>
      <Text>
        L'attestation d'inscription est pour l'année en cours seulement
      </Text>
      <Text>
        L'étudiant doit conserver l’original d'attestation d'inscription et
        fournir une copie identique de l’original au besoin
      </Text>
    </View>
  );
}
