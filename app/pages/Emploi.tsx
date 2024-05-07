import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { RootState, useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";
import { getEmploisDuTemps } from "../../state/EmploisDuTemps/EmploisDuTempsActions";
import { DateData } from "react-native-calendars/src/types";
import EventCard from "../components/EventCard";
import {
  setSelectedDay,
  setSelectedMonth,
} from "../../state/EmploisDuTemps/EmploisDuTempsSlice";

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
    let month =
      today.getFullYear() +
      "-" +
      ((today.getMonth() + 1).toString().length === 1
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1);
    console.log(month); // 2024-5
    let day =
      today.getDate().toString().length === 1
        ? "0" + today.getDate()
        : today.getDate();
    console.log(day); // 3

    disptach(setSelectedDay(day.toString()));

    disptach(setSelectedMonth(month));
    disptach(getEmploisDuTemps());
  }, []);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        onMonthChange={(month) => {
          setSelectedMonth(
            month.dateString.split("-")[0] +
              "-" +
              month.dateString.split("-")[1]
          );
        }}
        markedDates={{
          [selectedMonth + "-" + selectedDay]: {
            selected: true,
            selectedColor: "#5156BE",
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