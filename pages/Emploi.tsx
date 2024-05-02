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
import EventCard from "../components/EventCard";

export default function Emploi() {
  const { events, eventsTypes } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar className="" />
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
