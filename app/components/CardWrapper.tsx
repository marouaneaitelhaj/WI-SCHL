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
  expandedProp?: boolean;
};

export default function CardWrapper({
  children,
  title,
  expandedProp = false,
}: CardWrapperProps) {
  const [expanded, setExpanded] = useState(expandedProp);

  return (
    <Pressable
      onPress={() => {
        setExpanded(!expanded);
      }}
      className="bg-[#e0e1f3] my-3 rounded-md"
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton icon={expanded ? "chevron-up" : "chevron-down"} />
        <Text>
          {title}
        </Text>
      </View>
      {expanded && <Animated.View className={"ml-5"}>{children}</Animated.View>}
    </Pressable>
  );
}
