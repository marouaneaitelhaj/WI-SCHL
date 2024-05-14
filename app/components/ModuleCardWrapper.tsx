import { Pressable, ScrollView, Text, View } from "react-native";
import AbsenceCard from "./AbsenceCard";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IconButton } from "react-native-paper";

export default function ModuleCardWrapper() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Pressable onPress={() => {
      setExpanded(!expanded);
    }} style={{ marginLeft: 10 }} className="bg-[#eff0f9] my-3 rounded-md">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={expanded ? "chevron-up" : "chevron-down"}
        />
        <Text>Module 1</Text>
      </View>
      <View className="w-full  flex items-center">
        <ScrollView  horizontal={true}>
          {expanded && (
            <Animated.View>
              <AbsenceCard
                month="JAN"
                present={30}
                beingProcessed={30}
                absent={40}
              />
              <AbsenceCard
                month="JAN"
                present={30}
                beingProcessed={30}
                absent={40}
              />
              <AbsenceCard
                month="JAN"
                present={30}
                beingProcessed={30}
                absent={40}
              />
              <AbsenceCard
                month="JAN"
                present={30}
                beingProcessed={30}
                absent={40}
              />
              <AbsenceCard
                month="JAN"
                present={30}
                beingProcessed={30}
                absent={40}
              />
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </Pressable>
  );
}
