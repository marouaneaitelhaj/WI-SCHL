import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { TSession, days, getSessionsByHour, hours } from "./data";
import { TPeriode } from "@state/types";
import { Icon } from "react-native-paper";

export default function DisponibiliteCalendar(props: {
  title: string;
  periode: TPeriode;
}) {
  const [expended, setExpended] = useState<boolean>(false);
  const findSession = (day: string, hour: string) => {
    return props.periode.disponibilites.some((dispo) => {
      if (dispo.day === day && dispo.hour === hour) {
        console.log("found");
        return true;
      }
      return false;
    });
  };
  return (
    <Pressable className="bg-white flex" onPress={() => setExpended(!expended)}>
      <View className="flex flex-row justify-between w-full p-5 border-b border-[#E9E9EF]">
        <Text className="text-[#398AB9] font-bold text-xl">{props.title}</Text>
        {!expended && <Icon source="chevron-down" size={30} color="#398AB9" />}
        {expended && <Icon source="chevron-up" size={30} color="#398AB9" />}
      </View>
      {expended && (
        <ScrollView horizontal={true}>
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
                        className={
                          "flex justify-center h-12 w-20 border border-[#E9E9EF] items-center " +
                          (findSession(session.day, session.hour)
                            ? "bg-[#398AB9]"
                            : "")
                        }
                      >
                        <Text className={"text-center " + (findSession(session.day, session.hour) ? "text-white" : "")}>
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
      )}
    </Pressable>
  );
}
