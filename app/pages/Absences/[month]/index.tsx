import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { DateData } from "react-native-calendars/src/types";
import { RootState } from "@state/store";

export default function Absences() {
  
// props: { present?: number; absent: number; beingProcessed: number }
  const { month } = useLocalSearchParams();

  const {selectedElement} = useSelector((state : RootState) => state.absence);


  useEffect(() => {
    console.log(selectedElement?.element_absences);
    
  }, [
    selectedElement
  ]);

  return (
    <SafeAreaView className="h-screen bg-white">
      <Calendar
        onMonthChange={(month) => {
          //   setSelectedMonth(
          //     month.dateString.split("-")[0] +
          //       "-" +
          //       month.dateString.split("-")[1]
          //   );
        }}
        markedDates={{
          ["2024-05-12"]: {
            selected: true,
            selectedColor: "#D4FFEB",
            textColor: "black",
            color: "black",
          },
        }}
        onDayPress={(date: DateData) => {
          const day =
            date.day.toString().length === 1 ? "0" + date.day : date.day;
          const month =
            date.month.toString().length === 1 ? "0" + date.month : date.month;
            router.push(`/pages/Absences/${month}/${day}`);
          //   disptach(setSelectedDay(day));
          //   disptach(setSelectedMonth(date.year + "-" + month));
        }}
        className=""
      />
      <View className="flex flex-row justify-around py-6">
        <View className="w-20  flex justify-center items-center h-14 rounded-lg bg-[#D4FFEB]">
          <Text className="font-[Poppins-Black]  text-center font-bold text-[#25A168]">30</Text>
          <Text className="font-[Poppins-Black]  text-center font-normal text-[#25A168]">
            Present
          </Text>
        </View>
        <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
          <Text className="font-[Poppins-Black]  text-center font-bold text-[#F83A6C]">30</Text>
          <Text className="font-[Poppins-Black]  text-center font-normal text-[#F83A6C]">
            Absent
          </Text>
        </View>
        <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#e0e1f3]">
          <Text className="font-[Poppins-Black]  text-center font-bold text-[#607E97]">30</Text>
          <Text className="font-[Poppins-Black]  text-center font-normal text-[#607E97]">
            .........
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
