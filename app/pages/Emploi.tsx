import React, { useEffect } from "react";
import { ActivityIndicator, Modal, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { RootState, useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";
import { DateData, MarkedDates } from "react-native-calendars/src/types";
import EventCard from "../components/EventCard";
import {
  setSelectedDay,
  setSelectedMonth,
} from "../../state/EmploisDuTemps/SchedulesSlice";
import {
  getEmploisDuTempsByDay,
  getEmploisDuTempsByMonth,
} from "@state/EmploisDuTemps/SchedulesSliceActions";
import { useState } from "react";

export default function Emploi() {
  const { eventsForMonth, eventsForDay, loading } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const { selectedDay, selectedMonth } = useSelector(
    (state: RootState) => state.emploisDuTemps
  );

  const disptach = useAppDispatch();

  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

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
  }, []);

  useEffect(() => {
    let markedDates: { [key: string]: any } = {};

    eventsForMonth.forEach((event) => {
      let start = new Date(event.start);
      let end = new Date(event.end);
      let currentDate = start;

      while (currentDate <= end) {
        let day =
          currentDate.getDate().toString().length === 1
            ? "0" + currentDate.getDate()
            : currentDate.getDate();
        let month =
          (currentDate.getMonth() + 1).toString().length === 1
            ? "0" + (currentDate.getMonth() + 1)
            : currentDate.getMonth() + 1;
        let dateKey = `${currentDate.getFullYear()}-${month}-${day}`;

        if (!markedDates[dateKey]) {
          markedDates[dateKey] = { periods: [] };
        }

        markedDates[dateKey].periods.push({
          startingDay: currentDate.getDate() === start.getDate(),
          endingDay: currentDate.getDate() === end.getDate(),
          color: event.color,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    setMarkedDates(markedDates);
  }, [eventsForMonth]);

  return (
    <>
      <View className="bg-white">
        <ScrollView
          style={{
            height: "45%",
          }}
        >
          <Calendar
            markingType={"multi-period"}
            markedDates={{
              // [selectedMonth + "-" + selectedDay]: {
              //   periods: [{ startingDay: true, endingDay: true, color: "#5156BE"}],
              // },
              ...markedDates,
            }}
            onMonthChange={(month) => {
              setSelectedMonth(
                month.dateString.split("-")[0] +
                  "-" +
                  month.dateString.split("-")[1]
              );
              disptach(
                getEmploisDuTempsByMonth({
                  selectedMonth:
                    month.dateString.split("-")[0] +
                    "-" +
                    month.dateString.split("-")[1],
                })
              );
            }}
            initialDate="2024-05-04"
            onDayPress={(date: DateData) => {
              const day =
                date.day.toString().length === 1 ? "0" + date.day : date.day;
              const month =
                date.month.toString().length === 1
                  ? "0" + date.month
                  : date.month;
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
        </ScrollView>
        <ScrollView
          style={{
            height: "45%",
          }}
        >
          {eventsForDay &&
            eventsForDay.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          {eventsForDay.length === 0 && !loading && (
            <View className="flex  my-14 justify-center items-center h-[30px] ">
              <Text className="font-[Poppins-Black] text-[#5156BE] font-bold text-xl">
                No events
              </Text>
            </View>
          )}
          {loading && (
            <View className="flex my-14 justify-center items-center">
              <ActivityIndicator size="large" color="#5156BE" />
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}
