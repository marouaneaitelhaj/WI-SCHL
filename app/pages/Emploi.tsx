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
import { DateData, MarkedDates } from "react-native-calendars/src/types";
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
      today.getFullYear() +
      "-" +
      ((today.getMonth() + 1).toString().length === 1
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1);

    let day =
      today.getDate().toString().length === 1
        ? "0" + today.getDate()
        : today.getDate();

    disptach(setSelectedMonth(month));
    disptach(setSelectedDay(day));

    disptach(getEmploisDuTempsByMonth({ selectedMonth: month }));
    console.log("heloo", selectedMonth + "-" + selectedDay);
  }, []);

  useEffect(() => {
    let markedDates: MarkedDates = {};
    events.map((event) => {
      if (event.type == 3) {
        console.log("start as YYYY-MM-DD", event.start.split("T")[0]);
        console.log("END as YYYY-MM-DD", event.end.split("T")[0]);
        // loop through the days between start and end
        const start = new Date(event.start.split("T")[0]);
        const end = new Date(event.end.split("T")[0]);
        let currentDate = new Date(start);
        while (currentDate <= end) {
          console.log("current date", currentDate);
          let day =
            currentDate.getDate().toString().length === 1
              ? "0" + currentDate.getDate()
              : currentDate.getDate();
          let month =
            (currentDate.getMonth() + 1).toString().length === 1
              ? "0" + (currentDate.getMonth() + 1)
              : currentDate.getMonth() + 1;
          markedDates[`${currentDate.getFullYear()}-${month}-${day}`] = {
            selected: true,
            selectedColor: "#5156BE",
            endingDay: currentDate.getDate() === end.getDate(),
            startingDay: currentDate.getDate() === start.getDate(),
          };
          currentDate.setDate(currentDate.getDate() + 1);
        }
        console.log("markedDates", markedDates);
      }
    });
  }, [events]);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        // current={selectedMonth + "-" + selectedDay}
        markingType="period"
        markedDates={{
          "2024-04-29": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: true,
          },
          "2024-04-30": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
          "2024-05-01": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: true,
          },
          "2024-05-02": {
            endingDay: true,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
          "2024-05-03": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
          "2024-05-04": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
          "2024-05-05": {
            endingDay: false,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
          "2024-05-06": {
            endingDay: true,
            selected: true,
            selectedColor: "#5156BE",
            startingDay: false,
          },
        }}
        onMonthChange={(month) => {
          setSelectedMonth(
            month.dateString.split("-")[1] +
              "-" +
              month.dateString.split("-")[0]
          );
          disptach(
            getEmploisDuTempsByMonth({
              selectedMonth:
                month.dateString.split("-")[1] +
                "-" +
                month.dateString.split("-")[0],
            })
          );
        }}
        // markedDates={}
        initialDate="2024-05-04"
        onDayPress={(date: DateData) => {
          const day =
            date.day.toString().length === 1 ? "0" + date.day : date.day;
          const month =
            date.month.toString().length === 1 ? "0" + date.month : date.month;
          disptach(setSelectedDay(day));
          disptach(setSelectedMonth(date.year + "-" + month));
          disptach(
            getEmploisDuTempsByDay({
              selectedDay: day.toString(),
              selectedMonth: selectedMonth,
            })
          );
        }}
      />
      <View className="">
        <ScrollView className="flex flex-col">
          {events &&
            events.map((event) => <EventCard event={event} key={event.id} />)}
          {events.length === 0 && !loading && (
            <View className="flex justify-center items-center h-[30px] ">
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
