import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View, ScrollView, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
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
      <ScrollView
        style={{
          height: "40%",
        }}
      >
        <Calendar
          markingType={"period"}
          onDayPress={(day) => {
            if (selectingType === "start") {
              if (new Date(day.dateString) > new Date(dateEnd)) {
                setDateEnd(day.dateString);
              } else {
                setDateStart(day.dateString);
              }
            } else if (selectingType === "end") {
              if (new Date(day.dateString) < new Date(dateStart)) {
                setDateStart(day.dateString);
              } else {
                setDateEnd(day.dateString);
              }
            } else if (selectingType === "hour") {
            }
          }}
          markedDates={{
            [dateStart]: {
              startingDay: true,
              color: "#5156BE",
              textColor: "white",
            },
            [dateEnd]: {
              endingDay: true,
              color: "#5156BE",
              textColor: "white",
            },
            ...markedDates,
          }}
        />
      </ScrollView>
      <View className="flex justify-around flex-row py-2 w-full space-x-3">
        <Pressable
          className={
            "flex rounded-md w-1/3  justify-center items-center  px-5 py-2 " +
            (selectingType === "start" ? "bg-green-900" : "bg-green-500")
          }
          onPress={() => {
            setSelectingType("start");
          }}
        >
          <Text className="font-[Poppins-Black] text-white text-center w-full">
            Début
          </Text>
        </Pressable>
        <Pressable
          className={
            "flex rounded-md w-1/3  justify-center items-center  px-5 py-2 " +
            (selectingType === "end" ? "bg-red-900" : "bg-red-500")
          }
          onPress={() => {
            setSelectingType("end");
          }}
        >
          <Text className="font-[Poppins-Black] text-white text-center w-full">
            Fin
          </Text>
        </Pressable>
        <Pressable
          className={
            "flex rounded-md w-1/3  justify-center items-center  px-5 py-2 " +
            (selectingType === "hour" ? "bg-blue-900" : "bg-blue-500")
          }
          onPress={() => {
            setSelectingType("hour");
          }}
        >
          <Text className="font-[Poppins-Black] text-white text-center w-full">
            Heure
          </Text>
        </Pressable>
      </View>
      <View className="flex justify-center flex-cols"> 
        {Object.keys(markedDates).map((key) => {
          return (
            <Text key={key}>
              {key}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
