import { getAbsences } from "@state/Absences/AbsencesActions";
import { RootState, useAppDispatch } from "@state/store";
import AbsenceCard from "app/components/AbsenceCard";
import CardWrapper from "app/components/CardWrapper";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function Absences() {
  const dispatch = useAppDispatch();
  const { absences } = useSelector((state: RootState) => state.absence);
  
  useEffect(() => {
    dispatch(getAbsences())
      .unwrap()
      .then((data) => {
        console.log(data);
      });
  }, [dispatch]);
  
  useEffect(() => {
    console.log(absences);
  }, [absences]);
  
  return (
    <View className="flex flex-col items-start w-full h-full">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "90%", width: "100%" }}
        >
          {Object.entries(absences).map(([semesterName, semester]) => (
            <CardWrapper
              key={semesterName}
              bg="white"
              expandedProp={true}
              title={semesterName}
            >
              {semester.modules.flatMap((moduleGroup, groupIndex) =>
                moduleGroup.elements.map((element, elementIndex) => (
                  <AbsenceCard
                    element={element.libelle_fr}
                    key={element.libelle_fr}
                    count_absence_non_justifie={element.count_absence_non_justifie}
                    count_absence_justifie={element.count_absence_justifie}
                    count_absence_en_cours_justifie={element.count_absence_en_cours_justifie}
                    present={element.count_seance}
                    absent={element.count_absence}
                  />
                ))
              )}
            </CardWrapper>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}