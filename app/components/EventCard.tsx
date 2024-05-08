import { View, Text, Pressable } from "react-native";
import { Tevent } from "state/types";

export default function EventCard(
  props : {
    event : Tevent
  }
) {
  return (
    <Pressable onLongPress={()=>{
      // console.log(props.event)
    }}  className="flex flex-row w-full p-3 space-x-3 items-center">
      <View className={"h-16 w-16 flex rounded-full justify-center items-center"} style={{
        backgroundColor: props.event.color
      }}>
        <Text className="text-xs" style={{
          color : props.event.textColor
        }}>
          {props.event.start.split("T")[1].split(":")[0] +
            ":" +
            props.event.start.split("T")[1].split(":")[1]}
        </Text>
        <Text className="text-xs" style={{
          color : props.event.textColor
        }}>
          {props.event.end.split("T")[1].split(":")[0] +
            ":" +
            props.event.end.split("T")[1].split(":")[1]}
        </Text>
      </View>
      <View className={"h-16 w-4/5 rounded-md flex justify-center p-5"} style={{
        backgroundColor: props.event.color
      }}>
        <Text className="font-bold" style={{
          color : props.event.textColor
        }}>
          {props.event.title}
        </Text>
        {/* <Text className="text-gray-200 text-xs">
          {props.event.color}
        </Text> */}
      </View>
    </Pressable>
  );
}