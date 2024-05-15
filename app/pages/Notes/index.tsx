import AbsenceCard from "app/components/AbsenceCard";
import BottomSectionNotes from "app/components/BottomSectionNotes";
import CardWrapper from "app/components/CardWrapper";
import NotesCard from "app/components/NotesCard";
import { View, Text, ScrollView } from "react-native";

export default function Notes() {
  return (
    <View className="flex flex-col items-start w-full">
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
        style={{ height: "90%", width: "100%" }}
      >
        <CardWrapper bg="#e0e1f3" expandedProp={true} title="Semestre 2">
          <CardWrapper title="module 1">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
          <CardWrapper title="module 2">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
        </CardWrapper>
        <CardWrapper bg="#e0e1f3" expandedProp={true} title="Semestre 2">
          <CardWrapper title="module 1">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
          <CardWrapper title="module 2">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
        </CardWrapper>
      </ScrollView>
    </View>
  );
}
