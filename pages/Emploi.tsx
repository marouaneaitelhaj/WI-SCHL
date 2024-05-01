import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, AgendaEntry, Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState, useAppDispatch } from "../state/store";
import { useSelector } from "react-redux";
import { getEmploisDuTemps } from "../state/EmploisDuTemps/EmploisDuTempsActions";
import { AgendaSchedule, MarkedDates } from "react-native-calendars/src/types";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { set } from "react-hook-form";

export default function Emploi() {
  const { events, eventsTypes } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const disptach = useAppDispatch();

  const [agendaSchedule, setAgendaSchedule] = useState<AgendaSchedule>({});

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  useEffect(() => {
    const markedDates: AgendaSchedule = {};

    events.forEach((event) => {
      // markedDates[event.start]
      const eventStart = event.start.split("T")[0];

      const agendaEntry: AgendaEntry = {
        name: event.title + " " + eventsTypes[event.type],
        day: eventStart,
        height: 50,
      };
      if (markedDates[eventStart] === undefined) {
        markedDates[eventStart] = [agendaEntry];
      } else {
        markedDates[eventStart].push(agendaEntry);
      }
    });

    setAgendaSchedule(markedDates);
  }, [events]);

  useEffect(() => {
    console.log(agendaSchedule);
  }, [agendaSchedule]);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        // markingType={""}
        selected={new Date().toISOString().split("T")[0]}
        items={agendaSchedule}
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
