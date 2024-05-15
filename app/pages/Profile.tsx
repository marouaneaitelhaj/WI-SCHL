import { ScrollView } from "react-native";
import InformationspersonnelsProfile from "../components/InformationspersonnelsProfile";
import TopSectionForProfile from "../components/TopSectionForProfile";
import EditpersonnelsProfile from "../components/EditpersonnelsProfile";
import Animated, {
  Easing,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import ModifierLaMotDePass from "./ModifierLaMotDePass";

export default function Profile() {
  return (
    <Animated.View
      entering={SlideInRight.duration(100)}
      exiting={SlideOutLeft.duration(100).easing(Easing.ease)}
    >
      <ScrollView className="h-screen">
        <TopSectionForProfile />
        <InformationspersonnelsProfile />
        <EditpersonnelsProfile />
        <ModifierLaMotDePass />
      </ScrollView>
    </Animated.View>
  );
}
