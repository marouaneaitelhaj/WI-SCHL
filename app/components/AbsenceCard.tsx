import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function AbsenceCard(props: {
  present?: number;
  absent?: number;
  element?: string;
  beingProcessed?: number;
}) {
  return (
    <Pressable
      onPress={() => {
        router.push("/pages/Absences/" + props.element);
      }}
      className="flex flex-row w-full justify-center my-3 space-x-3"
    >
      <View className=" h-14 w-14 flex rounded-full justify-center items-center bg-[#D0EBFE]">
        <Text className="font-[Poppins-Black] uppercase text-[10px] text-center font-bold text-[#5156BE]">
          {props?.element
            ? props.element.charAt(0) +
              props.element.charAt(1) +
              props.element.charAt(2) +
              props.element.charAt(4) +
              props.element.charAt(5) +
              props.element.charAt(5) + '\n'+
              props.element.charAt(7) +
              props.element.charAt(8) +
              props.element.charAt(9) +
              props.element.charAt(10) +
              props.element.charAt(11) +
              props.element.charAt(12) + '\n'+
              props.element.charAt(11)
            : ""}
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center h-14 rounded-lg bg-[#D4FFEB]">
        <Text className="font-[Poppins-Black]  text-center font-bold text-[#25A168]">
          {props.present}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-[#25A168]">
          Present
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
        <Text className="font-[Poppins-Black]  text-center font-bold text-[#F83A6C]">
          {props.absent}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-[#F83A6C]">
          Absent
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#e0e1f3]">
        <Text className="font-[Poppins-Black]  text-center font-bold text-[#607E97]">
          {props.beingProcessed}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-[#607E97]">
          ........
        </Text>
      </View>
    </Pressable>
  );
}
