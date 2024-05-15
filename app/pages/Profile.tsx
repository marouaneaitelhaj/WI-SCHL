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
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@state/store";

function Profile(props: { showProfile: boolean }) {
  if (!props.showProfile) return null;
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
export default Profile;
