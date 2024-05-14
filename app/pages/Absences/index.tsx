import { View, Text, ScrollView } from "react-native";
import AbsenceCard from "../../components/AbsenceCard";
import AbsenceCardWrapper from "app/components/SessionCardWrapper";

export default function Absences() {
  return (
    <View className="flex flex-col items-start w-full">
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
        style={{ height: "90%" , width: "100%"}}
      >
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
        <AbsenceCardWrapper />
      </ScrollView>
    </View>
  );
}
