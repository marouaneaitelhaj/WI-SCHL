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

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        // markingType={""}
        selected={new Date().toISOString().split("T")[0]}
        markingType="period"
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
