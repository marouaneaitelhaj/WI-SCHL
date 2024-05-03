import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AnnonceCard from "../../components/AnnonceCard";

export default function Accueil() {
  return (
    <View className="m-2">
      <View>
        <Text className={"my-4 text-[#94CBF6]"}>Announce</Text>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text className={"my-4 text-[#94CBF6]"}>HomeWork</Text>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
            <AnnonceCard></AnnonceCard>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
