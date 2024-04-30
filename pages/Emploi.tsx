import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, AgendaEntry, Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState, useAppDispatch } from "../state/store";
import { useSelector } from "react-redux";
import { getEmploisDuTemps } from "../state/EmploisDuTemps/EmploisDuTempsActions";
import { MarkedDates } from "react-native-calendars/src/types";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { set } from "react-hook-form";

export default function Emploi() {
  const { events } = useSelector((state: RootState) => state.emploisDuTemps);

  const [markedDates, setMarkedDates] = useState<MarkedDates>({} as MarkedDates);

  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  useEffect(() => {
    setMarkedDates({} as MarkedDates);
    events.map((event) => {
      const start = event.start.split("T")[0];
      const end = event.end.split("T")[0];
      setMarkedDates((prev) => {
        return {
          ...prev,
          [start]: {
            marked: true,
            dotColor: event.color,
          } as MarkingProps,
          [end]: {
            marked: true,
            dotColor: event.color,
          } as MarkingProps,
        };
      });
    });
  }, [events]);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected={new Date().toISOString().split("T")[0]}
        items={{
          "2022-12-02": [] as AgendaEntry[],
          "2022-12-03": [] as AgendaEntry[],
          "2022-12-04": [] as AgendaEntry[],
          "2022-12-05": [] as AgendaEntry[],
          "2022-12-06": [] as AgendaEntry[],
        }}
        markingType={"period"}
        markedDates={markedDates}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
});
