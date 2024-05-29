import { View, Text, ActivityIndicator } from "react-native";
import React, { memo } from "react";
import { Tevent } from "@state/types";
import EventCard from "../EventCard";

function EmploiEventsForDay(props: {
  eventsForDay: Tevent[];
  loading: boolean;
}) {
  return (
    <>
      {props.eventsForDay &&
        props.eventsForDay.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      {props.eventsForDay.length === 0 && !props.loading && (
        <View className="flex  my-14 justify-center items-center h-[30px] ">
          <Text className="font-[Poppins-Black] text-[#5156BE] font-bold text-xl">
            No events
          </Text>
        </View>
      )}
      {props.loading && (
        <View className="flex my-14 justify-center items-center">
          <ActivityIndicator size="large" color="#5156BE" />
        </View>
      )}
    </>
  );
}

export default memo(EmploiEventsForDay);
