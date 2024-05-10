import { Alert, Text, View } from "react-native";
import { TAttestationInscriptions } from "../../state/types";
import { IconButton } from "react-native-paper";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

export default function AttestationCard(props: {
  data: TAttestationInscriptions;
}) {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(expanded ? 150 : 0),
      paddingTop: withTiming(expanded ? 10 : 0),
      paddingBottom: withTiming(expanded ? 10 : 0),
    };
  });

  return (
    <View className="rounded-lg relative bg-[#e0e1f3] p-5 my-2">
      <View className="">
        <Text>Demande envoyée au responsable scoalrité</Text>
      </View>
      <IconButton
        className="absolute top-0 right-0"
        icon={expanded ? "chevron-up" : "chevron-down"}
        size={30}
        iconColor="#5156BE"
        onPress={() => {
          setExpanded(!expanded);
          animatedHeight.value = withTiming(expanded ? 0 : 100);
        }}
      />
      <Animated.View style={animatedStyles} className={"space-y-2"}>
        <View className="flex flex-row space-x-5 ">
          <Text>Numéro de demande :</Text>
          <Text>{props.data.num_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text>Date de demande :</Text>
          <Text>{props.data.date_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text>Année scolaire :</Text>
          <Text>{props.data.anneUniversitaire}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text>Statut :</Text>
          <Text>{props.data.etat_dem === "1" ? "En attente" : "Validée"}</Text>
        </View>
        <View className="flex flex-row space-x-5  items-center ">
          <Text>Actions :</Text>
          {expanded && (
            <IconButton
              size={20}
              icon={props.data.etat_dem === "1" ? "close" : "download"}
              onPress={() => {
                if (props.data.etat_dem === "1") {
                  Alert.alert(
                    "Annuler la demande",
                    "Êtes-vous sûr de vouloir annuler cette demande ?",
                    [
                      {
                        text: "Annuler",
                        style: "cancel",
                      },
                      {
                        text: "Confirmer et Annuler",
                        style: "destructive",
                        onPress: () => {
                          // dispatch(cancelAttestation(props.data.num_dem));
                        },
                      },
                    ]
                  );
                } else {
                  Alert.alert(
                    "Télécharger l'attestation",
                    "Voulez-vous télécharger l'attestation ?",
                    [
                      {
                        text: "Annuler",
                        style: "cancel",
                      },
                      {
                        text: "Télécharger",
                        style: "destructive",
                        onPress: () => {
                          // dispatch(demandeAttestation());
                        },
                      },
                    ]
                  );
                }
              }}
            />
          )}
        </View>
      </Animated.View>
    </View>
  );
}
