import { setSelectedElement } from "@state/Absences/AbsencesSlice";
import { useAppDispatch } from "@state/store";
import { Element } from "@state/types";
import { router } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
Element;
export default function AbsenceCard({ element }: { element: Element }) {
  const dispatch = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setSelectedElement(element));
        router.push("/pages/Absences/" + element.libelle_fr);
      }}
      className="flex flex-row w-full justify-center my-3 space-x-3"
    >
      <View className=" h-14 w-32 px-2 flex rounded-full justify-center items-center bg-[#D0EBFE]">
        <Text className="font-[Poppins-Black] uppercase text-[10px] text-center font-bold text-[#5156BE]">
          {element.libelle_fr}
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center h-14 rounded-lg bg-green-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-green-700">
          {element.count_seance}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-green-700">
          Present
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-red-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-red-700">
          {element.count_absence}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-red-700">
          Absent
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-blue-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-blue-700">
          {element.count_absence_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-blue-700">
          justifie
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-[#FED4D5]">
        <Text className="font-[Poppins-Black]  text-center font-bold text-[#F83A6C]">
          {element.count_absence_non_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-[#F83A6C]">
          non justifie
        </Text>
      </View>
      <View className="w-20  flex justify-center items-center  h-14 rounded-lg bg-yellow-100">
        <Text className="font-[Poppins-Black]  text-center font-bold text-yellow-700">
          {element.count_absence_en_cours_justifie}
        </Text>
        <Text className="font-[Poppins-Black]  text-center font-normal text-yellow-700">
          en cours
        </Text>
      </View>
    </Pressable>
  );
}
