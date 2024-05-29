import { getNotes } from "@state/Notes/NotesActions";
import { RootState, useAppDispatch } from "@state/store";
import AbsenceCard from "app/components/Absence/AbsenceCard";
import BottomSectionNotes from "app/components/BottomSectionNotes";
import CardWrapper from "app/components/CardWrapper";
import NotesCard from "app/components/Demandes/NotesCard";
import { useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

export default function Notes() {
  const dispatch = useAppDispatch();
  const { notes, status } = useSelector((state: RootState) => state.note);
  useEffect(() => {
    dispatch(getNotes());
  }, []);
  return (
    <View className="flex flex-col items-start w-full">
      <ScrollView horizontal>
        <ScrollView
          className="flex flex-col"
          showsVerticalScrollIndicator={false}
          style={{ height: "90%", width: "100%" }}
        >
          {status == "loading" && (
            <ActivityIndicator size="large" color="#5156BE" />
          )}
          {status == "success" &&
            Object.entries(notes).map(([semesterName, semester]) => (
              <CardWrapper
                key={semesterName}
                bg="#e0e1f3"
                expandedProp={true}
                title={semesterName}
              >
                {semester.modules.flatMap((moduleGroup, groupIndex) =>
                  moduleGroup.map((module, moduleIndex) => (
                    <CardWrapper
                      expandedProp={true}
                      key={`${groupIndex}-${moduleIndex}`}
                      title={module.libelle_fr}
                    >
                      {module.elements.map((element, elementIndex) => (
                        <NotesCard element={element} key={elementIndex} />
                      ))}
                      <BottomSectionNotes module={module} key={module.id} />
                    </CardWrapper>
                  ))
                )}
              </CardWrapper>
            ))}
          {/* <CardWrapper bg="#e0e1f3" expandedProp={true} title="Semestre 2">
          <CardWrapper title="module 1">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
          <CardWrapper title="module 2">
            <NotesCard />
            <BottomSectionNotes />
          </CardWrapper>
        </CardWrapper> */}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
