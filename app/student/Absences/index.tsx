import { getAbsences } from "@state/Absences/AbsencesActions";
import { RootState, useAppDispatch } from "@state/store";
import AbsenceCard from "app/components/Absence/AbsenceCard";
import CardWrapper from "app/components/CardWrapper";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Absences() {
  const dispatch = useAppDispatch();
  const { absences, status } = useSelector((state: RootState) => state.absence);

  useEffect(() => {
    if (Object.keys(absences).length === 0) {
      dispatch(getAbsences());
    }
  }, []);

  return (
    <View className="flex flex-col items-start w-full h-screen">
      {status === "loading" && (
        <View className="w-screen flex justify-center items-center bg-transparent opacity-70">
          <ActivityIndicator size="large" color="#5156BE" />
        </View>
      )}
      {status !== "loading" && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ minWidth: "100%" }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ height: "85%", minWidth: "100%" }}
          >
            {Object.entries(absences).reverse().map(([semesterName, semester], groupIndex) => (
              <CardWrapper
                key={groupIndex + semesterName + semester.modules.length}
                bg="white"
                expandedProp={true}
                title={semesterName}
              >
                {semester.modules.flatMap((moduleGroup, groupIndex) =>
                  moduleGroup.elements.map((element, elementIndex) => (
                    <AbsenceCard key={elementIndex + element.libelle_fr + groupIndex + moduleGroup.libelle_fr} element={element} />
                  ))
                )}
              </CardWrapper>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
}
