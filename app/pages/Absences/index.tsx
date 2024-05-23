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
  }, []);
  useEffect(() => {
    console.log(absences);
  }, [absences]);
  return (
    <View className="flex flex-col items-start w-full">
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
        style={{ height: "90%", width: "100%" }}
      >
        {Object.entries(absences).map(([semesterName, semester]) => (
          <CardWrapper
            key={semesterName}
            bg="#e0e1f3"
            expandedProp={true}
            title={semesterName}
          >
            {semester.modules.flatMap((moduleGroup, groupIndex) =>
              moduleGroup.elements.map((element, elementIndex) => (
                <AbsenceCard element={element.libelle_fr} absent={element.absences.length} />
              ))
            )}
          </CardWrapper>
        ))}
        <CardWrapper bg="#e0e1f3" expandedProp={true} title="Semestre 2">
          <CardWrapper title="module 1">
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
          </CardWrapper>
          <CardWrapper title="module 2">
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
          </CardWrapper>
          <CardWrapper title="module 3">
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
            <AbsenceCard
              month="JAN"
              present={30}
              beingProcessed={30}
              absent={40}
            />
          </CardWrapper>
        </CardWrapper>
      </ScrollView>
    </View>
  );
}
