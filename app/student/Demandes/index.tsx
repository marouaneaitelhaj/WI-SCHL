import { ScrollView, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";
import { COLORS } from "static/colors";
import { useAppDispatch } from "state/store";
import { enableGoBack } from "state/TopBar/TopBarSlice";

export default function Demandes() {
  const data = [
    {
      key: "/student/Demandes/AttestationInscription",
      text: "Attestations d'inscription",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/AttestationScolarite",
      text: "Attestations de scolarité",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/AttestationReussite",
      text: "Attestations de réussite",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/ConventionStage",
      text: "Conventions de stage",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/ReleveNote",
      text: "Relevé de notes",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/RetraitDiplome",
      text: "Retrait de diplôme",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/RetraitBaccalaureat",
      text: "Retrait du Baccalauréat",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/CarteEtudiant",
      text: "Carte d'étudiant",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/ChangementFiliere",
      text: "Changement de filière",
      icon: "file-document",
    },
    {
      key: "/student/Demandes/Demande_reservation",
      text: "Demande de réservation de locaux",
      icon: "file-document",
    },
  ];

  const dispatch = useAppDispatch();

  return (
    <ScrollView className="flex flex-col" showsVerticalScrollIndicator={false}>
      <View className="flex pb-64 flex-row flex-wrap">
        {data.map((item, index) => (
          <View className="flex my-4 w-1/3 items-center" key={index}>
            <IconButton
              className={"border-2 border-[ " + COLORS.primaryColor + +"]"}
              style={{
                backgroundColor: "transparent",
                borderColor: COLORS.primaryColor,
              }}
              size={60}
              iconColor={COLORS.primaryColor}
              icon={item.icon}
              onPress={() => {
                router.push(item.key as never);
              }}
            />
            <Text className="font-[Poppins-Black] text-[#5156BE] text-center font-bold uppercase text-xs">{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
