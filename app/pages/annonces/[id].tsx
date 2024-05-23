import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { RootState, useAppDispatch } from "state/store";
import RenderHtml from "react-native-render-html";
import { Linking } from "react-native";
import { useSelector } from "react-redux";
import { Icon } from "react-native-paper";

export default function Annonce() {
  const { selectedAnnonce } = useSelector((state: RootState) => state.annonces);

  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();

  if (!selectedAnnonce) {
    return <Text>loading...</Text>;
  }

  const annonce_body = {
    html: selectedAnnonce.annonce_body || selectedAnnonce.objet,
  };

  const { width } = useWindowDimensions();

  return (
    <ScrollView className="p-10 space-y-10" style={{ height: "80%" }}>
      <Text className="font-[Poppins-Black] font-bold">
        {selectedAnnonce.annonce_title || selectedAnnonce.titre}
      </Text>
      <View>
        <RenderHtml source={annonce_body} contentWidth={width} />
      </View>
      {selectedAnnonce.date && (
        <Text className="font-[Poppins-Black] font-light text-gray-400">
          {selectedAnnonce.date}
        </Text>
      )}
      {selectedAnnonce.lien && (
        <Pressable
          onPress={() => {
            Linking.openURL(selectedAnnonce.lien);
          }}
          className="font-[Poppins-Black] bg-[#5156BE] px-3 py-5 text-center rounded-md font-light text-white flex flex-row justify-center space-x-2 items-center"
        >
          <Icon source={"link"} size={20} color="white" />
          <Text className="text-white">Ovrir le lien</Text>
        </Pressable>
      )}
      {selectedAnnonce.piece_jointe && (
        <Pressable
          className="font-[Poppins-Black] bg-[#5156BE] px-3 py-5 text-center rounded-md font-light text-white flex flex-row justify-center space-x-2 items-center"
          onPress={() => Linking.openURL(selectedAnnonce.piece_jointe)}
        >
          <Text className="font-[Poppins-Black] font-light text-white">
            Ovrir le fichier
          </Text>
        </Pressable>
      )}
      {(selectedAnnonce.image || selectedAnnonce.piece_jointe) && (
        <View className="h-32">
          <Image src={selectedAnnonce.image || selectedAnnonce.piece_jointe} />
        </View>
      )}
    </ScrollView>
  );
}
