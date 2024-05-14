import React, { useState } from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import ModuleCardWrapper from "./ModuleCardWrapper";

export default function AbsenceCardWrapper() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="bg-[#e0e1f3] my-3 rounded-md">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={expanded ? "chevron-up" : "chevron-down"}
          onPress={() => {
            setExpanded(!expanded);
          }}
        />
        <Text>1st Session</Text>
      </View>
      {expanded && (
        <Animated.View>
          <ModuleCardWrapper />
          <ModuleCardWrapper />
          <ModuleCardWrapper />
          <ModuleCardWrapper />
        </Animated.View>
      )}
    </View>
  );
}
