import { Text, View } from "react-native";
import { TAttestationInscriptions } from "../../state/types";
import { IconButton } from "react-native-paper";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

export default function AttestationCard(props: {
  data: TAttestationInscriptions;
}) {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(expanded ? 100 : 0),
      paddingTop: withTiming(expanded ? 10 : 0),
      paddingBottom: withTiming(expanded ? 10 : 0),
    };
  });

  return (
    <View className="rounded-lg relative bg-[#e0e1f3] p-5 my-2">
      <View className="">
        <Text>Demande envoyée au responsable scoalrité</Text>
      </View>
      <IconButton
        className="absolute top-0 right-0"
        icon={expanded ? "chevron-up" : "chevron-down"}
        size={30}
        iconColor="#5156BE"
        onPress={() => {
          setExpanded(!expanded);
          animatedHeight.value = withTiming(expanded ? 0 : 100);
        }}
      />
      <Animated.View style={animatedStyles} className={"space-y-2"}>
        <View className="flex flex-row space-x-5 ">
          <Text>Numéro de demande :</Text>
          <Text>{props.data.num_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text>Date de demande :</Text>
          <Text>{props.data.date_dem}</Text>
        </View>
        <View className="flex flex-row space-x-5 ">
          <Text>Année scolaire :</Text>
          <Text>{props.data.anneUniversitaire}</Text>
        </View>
      </Animated.View>
    </View>
  );
}
