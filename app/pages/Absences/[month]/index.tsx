import { router, useLocalSearchParams } from "expo-router";
import { Alert, Linking, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { DateData, MarkedDates } from "react-native-calendars/src/types";
import { RootState, useAppDispatch } from "@state/store";
import { Icon } from "react-native-paper";
import { justifierAbsence } from "@state/Absences/AbsencesActions";

export default function Absences() {
  const selectedElement = useSelector(
    (state: RootState) => state.absence.selectedElement
  );

  const [file, setFile] = useState({ uri: "", base64: "" });

  const dispatch = useAppDispatch();

  const [absence, setAbsence] = useState<{
    date_depot: string;
    id?: string;
    justifie_doc: string;
    justifie?: string | undefined;
    statut: string;
    date_absence: string;
  }>({} as any);

  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    let markedDates: { [key: string]: any } = {};
    console.log(selectedElement);
    
    selectedElement?.element_absences.forEach(
      (absence: {
        date_depot: string;
        justifie_doc: string;
        justifie?: string | undefined;
        statut: string;
        date_absence: string;
      }) => {
        markedDates[absence.date_absence] = {
          selected: true,
          selectedColor: absence.statut === "Justifié" ? "#D4FFEB" : "#FED4D5",
          textColor: "black",
          color: "black",
        };
      }
    );
    setMarkedDates(markedDates);
  }, [selectedElement]);

  const findAbsence = (date: string) => {
    setAbsence({} as any);
    selectedElement?.element_absences.map(
      (absence: {
        date_depot: string;
        id?: string;
        justifie_doc: string;
        justifie?: string | undefined;
        statut: string;
        date_absence: string;
      }) => {
        if (absence.date_absence === date) {
          setAbsence(absence);
          return absence;
        }
      }
    );
  };

  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (!result.canceled) {
      let base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setFile({ uri: result.assets[0].uri, base64 });
    }
  };

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        markedDates={markedDates}
        initialDate={selectedElement?.element_absences[0]?.date_absence}
        onDayPress={(date: DateData) => {
          findAbsence(date.dateString);
        }}
      />
      <View className="flex flex-row justify-around flex-wrap py-6 w-full">
        <View className="w-[17%]  flex justify-center items-center h-14 rounded-lg bg-green-100">
          <Text className="font-[Poppins-Black]  text-center text-xs font-bold text-green-700">
            {selectedElement?.count_seance}
          </Text>
          <Text className="font-[Poppins-Black]  text-center text-xs font-normal text-green-700">
            Present
          </Text>
        </View>
        <View className="w-[17%]  flex justify-center items-center  h-14 rounded-lg bg-red-100">
          <Text className="font-[Poppins-Black]  text-center text-xs font-bold text-red-700">
            {selectedElement?.count_absence}
          </Text>
          <Text className="font-[Poppins-Black]  text-center text-xs font-normal text-red-700">
            Absent
          </Text>
        </View>
        <View className="w-[17%]  flex justify-center items-center  h-14 rounded-lg bg-blue-100">
          <Text className="font-[Poppins-Black]  text-center text-xs font-bold text-blue-700">
            {selectedElement?.count_absence_justifie}
          </Text>
          <Text className="font-[Poppins-Black]  text-center text-xs font-normal text-blue-700">
            justifie
          </Text>
        </View>
        <View className="w-[17%]  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
          <Text className="font-[Poppins-Black]  text-center text-xs font-bold text-[#F83A6C]">
            {selectedElement?.count_absence_non_justifie}
          </Text>
          <Text className="font-[Poppins-Black]  text-center text-xs font-normal text-[#F83A6C]">
            non justifie
          </Text>
        </View>
        <View className="w-[17%]  flex justify-center items-center  h-14 rounded-lg bg-yellow-100">
          <Text className="font-[Poppins-Black]  text-center text-xs font-bold text-yellow-700">
            {selectedElement?.count_absence_en_cours_justifie}
          </Text>
          <Text className="font-[Poppins-Black]  text-center text-xs font-normal text-yellow-700">
            en cours
          </Text>
        </View>
      </View>
      {absence.date_absence &&
        (absence.statut == "Justifié" ||
          absence.statut == "En cours de traitement") && (
          <View>
            <Pressable
              onPress={() => {
                Linking.openURL(absence.justifie_doc);
              }}
              className="font-[Poppins-Black] bg-[#5156BE] px-3 py-5 text-center rounded-md font-light text-white flex flex-row justify-center space-x-2 items-center"
            >
              <Icon source={"link"} size={20} color="white" />
              <Text className="text-white">
                Aficher le document justificatif
              </Text>
            </Pressable>
          </View>
        )}
      {absence.date_absence &&
        absence.statut != ("Justifié" as string) &&
        absence.statut != "En cours de traitement" && (
          <View className="space-y-5">
            <Pressable
              onPress={() => {
                if (file.base64) {
                  setFile({ uri: "", base64: "" });
                } else {
                  pickFile();
                }
              }}
              className={
                "font-[Poppins-Black] relative px-3 py-5 text-center rounded-md font-light text-white flex flex-row justify-center space-x-2 items-center " +
                (file.base64 ? "bg-gray-500" : "bg-red-500")
              }
            >
              <Icon source={"upload"} size={20} color="white" />
              <Text className="text-white">
                Telecharger le document justificatif
              </Text>
              {file.base64 && (
                <View className="absolute right-3">
                  <Icon source={"cancel"} size={20} color="white" />
                </View>
              )}
            </Pressable>
            {file.base64 && (
              <Pressable
                onPress={() => {
                  Alert.alert(
                    "Confirmer",
                    "Voulez-vous vraiment justifier cette absence?",
                    [
                      {
                        text: "Annuler",
                        style: "cancel",
                      },
                      {
                        text: "Confirmer",
                        onPress: () => {
                          if (absence?.id && file.base64)
                            dispatch(
                              justifierAbsence({
                                id: absence?.id,
                                file: file.base64,
                              })
                            )
                              .unwrap()
                              .then((res) => {
                                Alert.alert(
                                  "Succès",
                                  "Votre absence a été justifiée avec succès",
                                  [
                                    {
                                      text: "OK",
                                      onPress: () => {
                                        router.back();
                                        setFile({ uri: "", base64: "" });
                                      },
                                    },
                                  ]
                                );
                              });
                        },
                      },
                    ]
                  );
                }}
                className="font-[Poppins-Black] bg-blue-500 px-3 py-5 text-center rounded-md font-light text-white flex flex-row justify-center space-x-2 items-center"
              >
                <Text className="text-white">Valider</Text>
              </Pressable>
            )}
          </View>
        )}
    </SafeAreaView>
  );
}
