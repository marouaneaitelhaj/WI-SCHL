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
import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@state/store";

function Profile(props: { showProfile: boolean }) {
  const { profileStatus } = useSelector((state: RootState) => state.profile);

  const InformationspersonnelsProfileMemo = useMemo(() => {
    if (profileStatus == 0) {
      return <InformationspersonnelsProfile profileStatus={profileStatus} />;
    }
  }, [profileStatus]);

  const EditpersonnelsProfileMemo = useMemo(() => {
    if (profileStatus == 1) {
      return <EditpersonnelsProfile profileStatus={profileStatus} />;
    }
  }, [profileStatus]);

  const ModifierLaMotDePassMemo = useMemo(() => {
    if (profileStatus == 2) {
      return <ModifierLaMotDePass profileStatus={profileStatus} />;
    }
  }, [profileStatus]);

  if (!props.showProfile) return null;
  return (
    <Animated.View
      entering={SlideInRight.duration(100)}
      exiting={SlideOutLeft.duration(100).easing(Easing.ease)}
    >
      <ScrollView className="h-screen">
        <TopSectionForProfile />
        {InformationspersonnelsProfileMemo}
        {EditpersonnelsProfileMemo}
        {ModifierLaMotDePassMemo}
      </ScrollView>
    </Animated.View>
  );
}
export default Profile;
