import { Alert, Text, View } from "react-native";
import { TDemande } from "../../state/types";
import { IconButton } from "react-native-paper";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { Linking } from 'react-native';
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { useAppDispatch } from "@state/store";
import { Platform } from "react-native";
import { AsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export default function AttestationCard(props: {
  data: TDemande;
  cancelDemande: AsyncThunk<string, string, AsyncThunkConfig>
}) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();
  const animatedHeight = useSharedValue(0);

  interface StatusMap {
    [key: string]: { text: string; color: string };
  }

  const statuts: StatusMap = {
    "1": {
      text: "En attente de traitement",
      color: "#e0e1f3",
    },
    "2": {
      text: "En cours de traitement",
      color: "#FFA500",
    },
    "3": {
      text: "Traitée",
      color: "#D4FFEB",
    },
    "0": {
      text: "Annulée",
      color: "#FED4D5",
    },
    "5": {
      text: "Signée électroniquement",
      color: "#1E90FF",
    },
    "6": {
      text: "Rejetée",
      color: "#4B0082",
    },
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(
        expanded && props.data.etat_dem !== "0"
          ? 150
          : expanded && props.data.etat_dem === "0"
          ? 128
          : 0
      ),
      paddingTop: withTiming(expanded ? 10 : 0),
      paddingBottom: withTiming(expanded ? 10 : 0),
    };
  });

  return (
    <View
      className="rounded-lg relative p-5 my-2"
      style={{ backgroundColor: statuts[props.data.etat_dem]?.color }}
    >
      <View className="">
        <Text className="font-[Poppins-Black]">
        {statuts[props.data.etat_dem]?.text}
        </Text>
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
          <Text className="font-[Poppins-Black]">Numéro de demande :</Text>
          <Text className="font-[Poppins-Black]">{props.data.num_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text className="font-[Poppins-Black]">Date de demande :</Text>
          <Text className="font-[Poppins-Black]">{props.data.date_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text className="font-[Poppins-Black]">Année scolaire :</Text>
          <Text className="font-[Poppins-Black]">{props.data.anneUniversitaire}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text className="font-[Poppins-Black]">Statut :</Text>
          <Text className="font-[Poppins-Black] text-red-500">
            {statuts[props.data.etat_dem]?.text}
          </Text>
        </View>
        {props.data.etat_dem !== "0" && (
          <View className="flex flex-row space-x-5  items-center ">
            <Text className="font-[Poppins-Black]">Actions :</Text>
            {expanded && (
              <Text className="font-[Poppins-Black]">
                {props.data.etat_dem === "1"
                  ? "Annuler la demande"
                  : "Télécharger l'attestation"}
              </Text>
            )}
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
                            dispatch(
                              props.cancelDemande(props.data.num_dem)
                            ).then((res) => {
                              Alert.alert(
                                "Demande annulée",
                                "Votre demande a été annulée avec succès"
                              );
                            });
                          },
                        },
                      ]
                    );
                  } else if (props.data.etat_dem === "3") {
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
                            Linking.openURL(props.data.file)
                          },
                        },
                      ]
                    );
                  }
                }}
              />
            )}
          </View>
        )}
      </Animated.View>
    </View>
  );
}
