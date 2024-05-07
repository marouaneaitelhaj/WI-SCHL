import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { RootState, useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";
import { DateData } from "react-native-calendars/src/types";
import EventCard from "../components/EventCard";
import {
  setSelectedDay,
  setSelectedMonth,
} from "../../state/EmploisDuTemps/EmploisDuTempsSlice";
import {
  getEmploisDuTempsByDay,
  getEmploisDuTempsByMonth,
} from "state/EmploisDuTemps/EmploisDuTempsActions";

export default function Emploi() {
  const { events, loading } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const { selectedDay, selectedMonth } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const disptach = useAppDispatch();

  useEffect(() => {
    const today = new Date();
    let month =
      ((today.getMonth() + 1).toString().length === 1
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    let day =
      today.getDate().toString().length === 1
        ? "0" + today.getDate()
        : today.getDate();
    disptach(setSelectedMonth(month));

    disptach(getEmploisDuTempsByMonth({ selectedMonth: month }));
  }, []);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        onMonthChange={(month) => {
          setSelectedMonth(
            month.dateString.split("-")[1] +
              "/" +
              month.dateString.split("-")[0]
          );

          console.log("selectedMonth", selectedMonth);

          disptach(
            getEmploisDuTempsByMonth({
              selectedMonth:
                month.dateString.split("-")[1] +
                "/" +
                month.dateString.split("-")[0],
            })
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
          disptach(setSelectedMonth(month + "/" + date.year));
          disptach(
            getEmploisDuTempsByDay({
              selectedDay: day.toString(),
              selectedMonth: selectedMonth,
            })
          );
        }}
        className=""
      />
      <View className="">
        <ScrollView className="flex flex-col">
          {events &&
            events.map((event) => <EventCard event={event} key={event.id} />)}
          {events.length === 0 && !loading && (
            <View className="flex justify-center items-center">
              <Text className="text-[#5156BE] font-bold text-xl">
                No events
              </Text>
            </View>
          )}
          {loading && (
            <View className="flex justify-center items-center">
              <ActivityIndicator size="large" color="#5156BE" />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
