import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View, ScrollView, Pressable } from "react-native";
import {
  Calendar,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";

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
      <ScrollView>
        <View className="bg-red-600 w-full flex items-end">
          <View className="w-[85%]">
            <CalendarProvider date={new Date().toISOString().split("T")[0]}>
              <WeekCalendar />
            </CalendarProvider>
          </View>
        </View>
        <View>
          <View className="space-y-5 py-5 bg-pink-500 w-[15%] flex items-center">
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">07 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">08 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">09 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">10 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">11 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">12 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">13 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">14 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">15 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">16 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">17 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">18 h</Text>
            </View>
            <View className="flex justify-center h-12 w-12 border items-center">
              <Text className="text-center">19 h</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
