import { Pressable, ScrollView } from "react-native";
import InformationspersonnelsProfile from "../components/InformationspersonnelsProfile";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import TopSectionForProfile from "../components/TopSectionForProfile";
import EditpersonnelsProfile from "../components/EditpersonnelsProfile";
import Animated from "react-native-reanimated";

export default function Profile() {
  const { editProfile } = useSelector((state: RootState) => state.profile);

  return (
    <ScrollView className="my-2 w-full">
      <TopSectionForProfile />
      {!editProfile && <InformationspersonnelsProfile />}
      {editProfile && <EditpersonnelsProfile />}
    </ScrollView>
  );
}
