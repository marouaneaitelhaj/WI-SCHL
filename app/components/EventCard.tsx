import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { Tevent } from "state/types";
import Animated from "react-native-reanimated";

export default function EventCard(props: { event: Tevent }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Pressable
      onLongPress={() => {
      }}
      className="flex flex-row w-full p-3 space-x-3 items-center"
    >
      <View
        className={"h-16 w-16 flex rounded-full justify-center items-center"}
        style={{
          backgroundColor: props.event.color,
        }}
      >
        <Text
          className="text-xs"
          style={{
            color: props.event.textColor,
          }}
        >
          {props.event.start.split("T")[1].split(":")[0] +
            ":" +
            props.event.start.split("T")[1].split(":")[1]}
        </Text>
        <Text
          className="text-xs"
          style={{
            color: props.event.textColor,
          }}
        >
          {props.event.end.split("T")[1].split(":")[0] +
            ":" +
            props.event.end.split("T")[1].split(":")[1]}
        </Text>
      </View>
      <View
        className={"w-4/5 rounded-md flex flex-row items-center p-5" + (expanded ? " h-32" : " h-16") }
        style={{
          backgroundColor: props.event.color,
        }}
      >
        <Text
          className="font-bold w-[85%]"
          numberOfLines={expanded ? 5 : 1}
          style={{
            color: props.event.textColor,
          }}
        >
          {props.event.title}
        </Text>
        <IconButton
          icon={expanded ? "chevron-up" : "chevron-down"}
          onPress={() => {
            setExpanded(!expanded);
          }}
          iconColor={props.event.textColor}
        />
      </View>
    </Pressable>
  );
}
