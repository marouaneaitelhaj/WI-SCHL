import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, AgendaEntry, Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState, useAppDispatch } from "../state/store";
import { useSelector } from "react-redux";
import { getEmploisDuTemps } from "../state/EmploisDuTemps/EmploisDuTempsActions";
import {
  AgendaSchedule,
  DateData,
  MarkedDates,
} from "react-native-calendars/src/types";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { set } from "react-hook-form";
import EventCard from "../components/EventCard";
import {
  setSelectedDay,
  setSelectedMonth,
} from "../state/EmploisDuTemps/EmploisDuTempsSlice";

export default function Emploi() {
  const { events, eventsTypes } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const { selectedDay, selectedMonth } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const disptach = useAppDispatch();

  useEffect(() => {
    // get month of today
    const today = new Date();
    let month = today.getFullYear() + "-" + ((today.getMonth() + 1).toString().length === 1 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1));
    console.log(month); // 2024-5
    let day = today.getDate().toString().length === 1 ? "0" + today.getDate() : today.getDate();
    console.log(day); // 3

    disptach(setSelectedDay(day.toString()));

    disptach(setSelectedMonth(month));
    disptach(getEmploisDuTemps());
  }, []);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        markedDates={{
          [selectedMonth + "-" + selectedDay]: {
            selected: true,
            selectedColor: "#1E9FF2",
          },
        }}
        onDayPress={(date: DateData) => {
          const day =
            date.day.toString().length === 1 ? "0" + date.day : date.day;
          const month =
            date.month.toString().length === 1 ? "0" + date.month : date.month;
          disptach(setSelectedDay(day));
          disptach(setSelectedMonth(date.year + "-" + month));
        }}
        className=""
      />
      <View className="">
        <ScrollView className="flex flex-col">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
