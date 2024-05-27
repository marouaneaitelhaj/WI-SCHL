import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import EventCard from "app/components/EventCard";
import { Tevent } from "@state/types";

export default function index() {
  return (
    <>
      <View className="bg-white">
        <ScrollView
          style={{
            height: "45%",
          }}
        >
          <Calendar />
        </ScrollView>
        <ScrollView
          style={{
            height: "45%",
          }}
        >
          <EventCard
            link="/prof/Absences/1"
            event={
              {
                color: "red",
                textColor: "black",
                title: "Math",
              } as Tevent
            }
            key={"event.id"}
          />
          <EventCard
            link="/prof/Absences/1"
            event={
              {
                color: "red",
                textColor: "black",
                title: "Math",
              } as Tevent
            }
            key={"event.id"}
          />
          <EventCard
            link="/prof/Absences/1"
            event={
              {
                color: "red",
                textColor: "black",
                title: "Math",
              } as Tevent
            }
            key={"event.id"}
          />
          <EventCard
            link="/prof/Absences/1"
            event={
              {
                color: "red",
                textColor: "black",
                title: "Math",
              } as Tevent
            }
            key={"event.id"}
          />
          {/* {eventsForDay &&
            eventsForDay.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          {eventsForDay.length === 0 && !loading && (
            <View className="flex  my-14 justify-center items-center h-[30px] ">
              <Text className="font-[Poppins-Black] text-[#5156BE] font-bold text-xl">
                No events
              </Text>
            </View>
          )} */}
          {/* {loading && (
            <View className="flex my-14 justify-center items-center">
              <ActivityIndicator size="large" color="#5156BE" />
            </View>
          )} */}
        </ScrollView>
      </View>
    </>
  );
}
