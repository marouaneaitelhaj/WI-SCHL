import AbsenceCard from "app/components/AbsenceCard";
import CardWrapper from "app/components/CardWrapper";
import { View, Text, ScrollView } from "react-native";

export default function Absences() {
  return (
    <View className="flex flex-col items-start w-full">
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
        style={{ height: "90%", width: "100%" }}
      >
        <CardWrapper expandedProp={true} title="Semestre 2">
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
