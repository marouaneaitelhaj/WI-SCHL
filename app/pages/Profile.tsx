import { Pressable, ScrollView } from "react-native";
import InformationspersonnelsProfile from "../components/InformationspersonnelsProfile";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../state/store";
import TopSectionForProfile from "../components/TopSectionForProfile";
import EditpersonnelsProfile from "../components/EditpersonnelsProfile";
import Animated, {
  Easing,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import { IconButton } from "react-native-paper";
import ModifierLaMotDePass from "./ModifierLaMotDePass";

export default function Profile() {
  const { profileStatus } = useSelector((state: RootState) => state.profile);

  return (
    <Animated.View
      entering={SlideInRight.duration(100)}
      exiting={SlideOutLeft.duration(100).easing(Easing.ease)}
    >
      <ScrollView className="my-2 h-screen">
        <TopSectionForProfile />
        {profileStatus == 0 && <InformationspersonnelsProfile />}
        {profileStatus == 1 && <EditpersonnelsProfile />}
        {profileStatus == 2 && <ModifierLaMotDePass />}
      </ScrollView>
    </Animated.View>
  );
}