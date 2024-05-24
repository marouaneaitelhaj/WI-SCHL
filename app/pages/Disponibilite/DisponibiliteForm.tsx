import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View, ScrollView, Pressable } from "react-native";
import {
  Calendar,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { days, hours, sessions } from "./data";

export default function DisponibiliteForm() {
  const [dateStart, setDateStart] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [dateEnd, setDateEnd] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectingType, setSelectingType] = useState<"start" | "end" | "hour">(
    "start"
  );
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  useEffect(() => {
    let markedDates: { [key: string]: any } = {};
    let currentDate = new Date(dateStart);
    while (currentDate < new Date(dateEnd)) {
      if (currentDate.toISOString().split("T")[0] === dateStart) {
        currentDate.setDate(currentDate.getDate() + 1);
        continue;
      }
      markedDates[currentDate.toISOString().split("T")[0]] = {
        color: "#5156BE",
        textColor: "white",
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setMarkedDates(markedDates);
  }, [dateEnd, dateStart]);
  return (
    <View className="bg-white">
      <ScrollView className="h-[85%]">
        <View className="w-full flex items-end">
          <View className="w-[88%] flex flex-row">
            {days.map((day) => (
              <View className="flex justify-center h-12 w-12 border items-center">
                <Text className="text-center">{day}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="flex flex-row">
          <View className="w-[12%] flex items-center">
            {hours.map((hour) => (
              <View className="flex justify-center h-12 w-12 border items-center">
                <Text className="text-center">{hour}</Text>
              </View>
            ))}
          </View>
          <View className="w-[88%] flex flex-col flex-wrap">
            {sessions.map((session) => (
              <View className="flex justify-center h-12 w-12 border items-center">
                <Text className="text-center">{session.day + "/" + session.hour}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
