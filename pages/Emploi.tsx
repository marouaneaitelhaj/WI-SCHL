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

  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    const markedDates: MarkedDates = {};
    events.forEach((event) => {
      const start = event.start.split("T")[0];
      const end = event.end.split("T")[0];
      const startDate = new Date(start);
      const endDate = new Date(end);

      // log how much time is between the start and end dates

      const diff = endDate.getTime() - startDate.getTime();
      const diffDays = diff / (1000 * 3600 * 24);

      if (diffDays === 1) {
        const markingProps: MarkingProps = {
          startingDay: true,
          endingDay: true,
          color: event.color,
        };
        markedDates[start] = markingProps;
      } else {
        for (let i = 1; i <= diffDays; i++) {
          if (i === 1) {
            const markingProps: MarkingProps = {
              startingDay: true,
              color: event.color,
            };

            const date = new Date(start);
            date.setDate(date.getDate() + i);
            
            console.log("part 1", date.toISOString().split("T")[0], i);

            

            markedDates[start] = markingProps;
          } else if (i === diffDays) {
            const markingProps: MarkingProps = {
              endingDay: true,
              color: event.color,
            };
            const date = new Date(start);
            date.setDate(date.getDate() + i);

            
            console.log("part 2", date.toISOString().split("T")[0]);
            markedDates[end] = markingProps;
          } else {
            
            const markingProps: MarkingProps = {
              color: event.color,
              selected: true,
            };
            const date = new Date(start);
            date.setDate(date.getDate() + i);
            
            console.log("part 3", date.toISOString().split("T")[0]);
            markedDates[date.toISOString().split("T")[0]] = markingProps;
          }
        }
      }
    });
    console.log(markedDates);

    setMarkedDates(markedDates);
  }, [events]);

  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected={new Date().toISOString().split("T")[0]}
        markingType="period"
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
