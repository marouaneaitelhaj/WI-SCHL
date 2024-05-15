import React, { useState } from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Pressable } from "react-native";

type CardWrapperProps = {
  children: any;
  title?: string;
  bg?: string;
  expandedProp?: boolean;
};

export default function CardWrapper({
  children,
  title,
  bg = "#eff0f9",
  expandedProp = false,
}: CardWrapperProps) {
  const [expanded, setExpanded] = useState(expandedProp);

  return (
    <Pressable
      onPress={() => {
        setExpanded(!expanded);
      }}
      className={"my-3 rounded-md"}
      style={{
        backgroundColor: bg
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton icon={expanded ? "chevron-up" : "chevron-down"} />
        <Text>{title}</Text>
      </View>
      {expanded && <Animated.View className={"ml-5"}>{children}</Animated.View>}
    </Pressable>
  );
}
