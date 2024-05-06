import { View, Text } from "react-native";

export default function AbsenceCard(props: {
  month: string;
  present: number;
  absent: number;
  beingProcessed: number;
}) {
  return (
    <View className="flex flex-row w-full justify-center my-3 space-x-3">
      <View className=" h-14 w-14 flex rounded-full justify-center items-center bg-[#D0EBFE]">
        <Text className=" text-center font-bold text-[#1E9FF2]">{props.month}</Text>
      </View>
      <View className="w-20  flex justify-center items-center h-14 rounded-lg bg-[#D4FFEB]">
        <Text className=" text-center font-bold text-[#25A168]">{props.present}</Text>
        <Text className=" text-center font-normal text-[#25A168]">Present</Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
        <Text className=" text-center font-bold text-[#F83A6C]">{props.absent}</Text>
        <Text className=" text-center font-normal text-[#F83A6C]">Absent</Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#D4F4FF]">
        <Text className=" text-center font-bold text-[#607E97]">{props.beingProcessed}</Text>
        <Text className=" text-center font-normal text-[#607E97]">.........</Text>
      </View>
    </View>
  );
}
