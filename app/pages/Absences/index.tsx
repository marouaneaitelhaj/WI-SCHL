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
    <View className="flex flex-col items-start w-full h-screen">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ minWidth: "100%" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "90%", minWidth: "100%" }}
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
                  <AbsenceCard element={element} />
                ))
              )}
            </CardWrapper>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
