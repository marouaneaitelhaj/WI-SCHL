import { router } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";

export default function AbsenceCard(props: {
  present?: number;
  absent?: number;
  element?: string;
  beingProcessed?: number;
  count_absence_en_cours_justifie?: number;
  count_absence_non_justifie?: number;
  count_absence_justifie?: number;
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
          {props.element}
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center h-14 rounded-lg bg-green-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-green-700">
          {props.present}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-green-700">
          Present
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-red-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-red-700">
          {props.absent}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-red-700">
          Absent
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-blue-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-blue-700">
          {props.count_absence_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-blue-700">
          justifie
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
        <Text className="font-[Poppins-Black]  text-center font-bold text-[#F83A6C]">
          {props.count_absence_non_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-[#F83A6C]">
          non justifie
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-yellow-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-yellow-700">
          {props.count_absence_en_cours_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-yellow-700">
          en cours
        </Text>
      </View>
    </Pressable>
  );
}
