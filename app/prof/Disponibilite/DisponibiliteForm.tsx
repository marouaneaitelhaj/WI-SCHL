import { useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import { View, ScrollView, Pressable } from "react-native";
import {
  Calendar,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { TSession, days, getSessionsByHour, hours, sessions } from "./data";
import { Picker } from "@react-native-picker/picker";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@state/store";
import { Disponibilite } from "@state/types";

export default function DisponibiliteForm() {
  const [start, setStart] = useState<TSession | null>(null);
  const [end, setEnd] = useState<TSession | null>(null);
  const [selectingType, setSelectingType] = useState<"start" | "end">("start");
  const picker = useRef(null);
  const { data, status } = useSelector(
    (state: RootState) => state.disponibilite
  );
  const [periode, setPeriode] = useState<string>("1");

  const [formData, setFormData] = useState<{
    dayName: string;
    heure_d: string;
    heure_f: string;
    periode: string;
  }>({
    dayName: end?.day || "",
    heure_d: start?.hour || "",
    heure_f: end?.hour || "",
    periode: periode,
  });

  const [disponibilites, setDisponibilites] = useState<Disponibilite[]>([]);

  const findSession = (day: string, hour: string) => {
    return disponibilites.some((dispo) => {
      if (dispo.day === day && dispo.hour === hour) {
        console.log("found");
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    data.periodes.forEach((periodeD, index) => {
      if ((index + 1).toString() === periode) {
        setDisponibilites(periodeD.disponibilites);
      }
    });
  }, [periode]);

  return (
    <View className="bg-white flex-1 space-y-5">
      <View className="border border-[#E9E9EF] rounded-md">
        <Picker
          ref={picker}
          selectedValue={periode}
          onValueChange={(e) => {
            setPeriode(e);
          }}
        >
          <Picker.Item label="Premier Periode" value="1" />
          <Picker.Item label="Deuxieme Periode" value="2" />
        </Picker>
      </View>
      <View className="h-[70%]">
        <ScrollView
          horizontal={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
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
                            // Check if the day of the selected session is the same as the day of the start session
                            if (start && session.day !== start.day) {
                              setStart(session);
                              return;
                            }
                            setEnd(session);
                            setSelectingType("start");
                            // if (picker.current) picker.current?.focus();
                          }
                        }}
                        disabled={findSession(session.day, session.hour)}
                        className={
                          "flex justify-center h-12 w-20 border border-[#E9E9EF] items-center " +
                          (findSession(session.day, session.hour)
                            ? "bg-gray-500"
                            : session === start ||
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
                            (findSession(session.day, session.hour)
                              ? "text-white"
                              : session === start ||
                                session === end ||
                                (start &&
                                  end &&
                                  session.id > start?.id &&
                                  session.id < end?.id) ||
                                findSession(session.day, session.hour)
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
      <Pressable
        className="bg-[#398AB9] p-3 rounded-md"
        onPress={() => {
          setFormData({
            dayName: end?.day || "",
            heure_d: start?.hour || "",
            heure_f: end?.hour || "",
            periode: periode,
          });
          console.log(formData);
        }}
      >
        <Text className="text-white text-center uppercase">Valider</Text>
      </Pressable>
    </View>
  );
}
