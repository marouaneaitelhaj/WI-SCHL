import { Alert, ScrollView, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { COLORS } from "static/colors";
import { useAppDispatch } from "state/store";
import { closeTopBar, toggleTopBar } from "state/TopBar/TopBarSlice";
import { logout } from "state/Auth/AuthSlice";

export default function Demandes() {
  const data = [
    {
      key: "/pages/Demandes/AttestationInscription",
      text: "Attestations d'inscription",
      icon: "file-document",
    },
    {
      key: "/pages/Demandes",
      text: "Attestations de scolarité",
      icon: "file-document",
    },
    {
      key: "/pages/Demandes",
      text: "Attestations de réussite",
      icon: "file-document",
    },
    {
      key: "/pages/Demandes",
      text: "Conventions de stage",
      icon: "file-document",
    },
    { key: "/pages/Demandes", text: "Relevé de notes", icon: "file-document" },
    {
      key: "/pages/Demandes/RetraitDiplome",
      text: "Retrait de diplôme",
      icon: "file-document",
    },
    {
      key: "/pages/Demandes/RetraitBaccalaureat",
      text: "Retrait du Baccalauréat",
      icon: "file-document",
    },
    { key: "/pages/Demandes/CarteEtudiant", text: "Carte d'étudiant", icon: "file-document" },
    {
      key: "/pages/Demandes/ChangementFiliere",
      text: "Changement de filière",
      icon: "file-document",
    },
    {
      key: "/pages/Demandes/Demande_reservation",
      text: "Demande de réservation de locaux",
      icon: "file-document",
    },
  ];

  const dispatch = useAppDispatch();

  return (
    <ScrollView className="flex flex-col" showsVerticalScrollIndicator={false}>
      <View className="flex pb-64 flex-row flex-wrap">
        {data.map((item, index) => (
          <View className="flex my-4 w-1/3 items-center " key={index}>
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
                router.replace(item.key as never);
              }}
            />
            <Text className="text-[#1E9FF2] text-center">{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
