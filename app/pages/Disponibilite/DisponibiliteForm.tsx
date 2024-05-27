import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View, ScrollView, Pressable } from "react-native";
import {
  Calendar,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { TSession, days, getSessionsByHour, hours, sessions } from "./data";

export default function DisponibiliteForm() {
  const [start, setStart] = useState<TSession | null>(null);
  const [end, setEnd] = useState<TSession | null>(null);
  const [selectingType, setSelectingType] = useState<"start" | "end">("start");
  // useEffect(() => {
  //   let markedDates: { [key: string]: any } = {};
  //   let currentDate = new Date(dateStart);
  //   while (currentDate < new Date(dateEnd)) {
  //     if (currentDate.toISOString().split("T")[0] === dateStart) {
  //       currentDate.setDate(currentDate.getDate() + 1);
  //       continue;
  //     }
  //     markedDates[currentDate.toISOString().split("T")[0]] = {
  //       color: "#5156BE",
  //       textColor: "white",
  //     };
  //     currentDate.setDate(currentDate.getDate() + 1);
  //   }
  //   setMarkedDates(markedDates);
  // }, [dateEnd, dateStart]);

  return (
    <View className="bg-white flex-1">
      <ScrollView className="h-[85%]" horizontal={true}>
        <ScrollView>
          <View className="w-full flex items-end">
            <View className="w-[88%] flex flex-row">
              {days.map((day, index) => (
                <View
                  key={index}
                  className="flex justify-center h-12 w-20 border border-[#398AB9] items-center"
                >
                  <Text className="text-center text-[#398AB9] font-bold">
                    {day}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {hours.map((hour, hourIndex) => (
            <View key={hourIndex} className="flex flex-row">
              <View className="w-[12%] flex items-center">
                <View className="flex justify-center h-12 w-20  border border-r-0 border-[#E9E9EF] items-center">
                  <Text className="text-center">{hour}</Text>
                </View>
              </View>
              <View className="flex flex-row flex-wrap">
                {getSessionsByHour(hour).map(
                  (session: TSession, sessionIndex: number) => (
                    <Pressable
                      key={sessionIndex}
                      onPress={() => {
                        if (selectingType === "start") {
                          setEnd(null);
                          setStart(session);
                          setSelectingType("end");
                        } else {
                          if (start && session.id < start?.id) {
                            setStart(session);
                            setEnd(null);
                            setSelectingType("end");
                            return;
                          }
                          setEnd(session);
                          setSelectingType("start");
                        }
                      }}
                      className={
                        "flex justify-center h-12 w-20 border border-[#E9E9EF] items-center " +
                        (session === start ||
                        session === end ||
                        (start &&
                          end &&
                          session.id > start?.id &&
                          session.id < end?.id)
                          ? "bg-[#398AB9]"
                          : "")
                      }
                    >
                      <Text
                        className={
                          "text-center " +
                          (session === start ||
                          session === end ||
                          (start &&
                            end &&
                            session.id > start?.id &&
                            session.id < end?.id)
                            ? "text-white"
                            : "")
                        }
                      >
                        {session.day.charAt(0) +
                          "/" +
                          session.hour.charAt(0) +
                          (session.hour.charAt(1) === ":"
                            ? ""
                            : session.hour.charAt(1))}
                      </Text>
                    </Pressable>
                  )
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
